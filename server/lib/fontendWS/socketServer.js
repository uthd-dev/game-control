const sessionConfig = require("../sessions").sessionConfig;
const cookieParser = require("../sessions").cookieParser;
const passportSocketIo = require("passport.socketio");

const streamerDB = require("../db/find/streamers");
const userDB = require("../db/find/users");

exports = module.exports = (io) => {
  const userSocket = io.of("/api/users/ws");
  const adminSocket = io.of("/api/admin/ws");

  /* REGULAR USER WS */
  userSocket.use(
    passportSocketIo.authorize({
      /* From: https://github.com/jfromaniello/passport.socketio */
      cookieParser: cookieParser,
      key: "connect.sid", // the name of the cookie where express/connect stores its session_id
      secret: sessionConfig.secret, // the session_secret to parse the cookie
      store: sessionConfig.store, // we NEED to use a sessionstore. no memorystore please
      success: onUserAuthorizeSuccess, // *optional* callback on success - read more below
      fail: onUserAuthorizeFail, // *optional* callback on fail/error - read more below
    })
  );

  function onUserAuthorizeSuccess(data, accept) {
    accept();
  }

  function onUserAuthorizeFail(data, message, error, accept) {
    if (error) console.log(new Error(message)); //Deny due to crit. err.
    return accept(new Error(message)); //Deny due to non-crit. err.
  }

  userSocket.on("connection", (socket) => {
    if (socket.request.user && socket.request.user.logged_in) {
      socket.emit("update-userData", socket.request.user);
      userDB
        .setOnlinePlayerStatus(socket.request.user.username, true)
        .then(() => {
          emitAdminStats(adminSocket, userSocket);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    socket.on("disconnect", (reason) => {
      userDB
        .setOnlinePlayerStatus(socket.request.user.username, false)
        .then(() => {
          emitAdminStats(adminSocket, userSocket);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  /* ADMIN WS */
  adminSocket.use(
    passportSocketIo.authorize({
      /* From: https://github.com/jfromaniello/passport.socketio */
      cookieParser: cookieParser,
      key: "connect.sid", // the name of the cookie where express/connect stores its session_id
      secret: sessionConfig.secret, // the session_secret to parse the cookie
      store: sessionConfig.store, // we NEED to use a sessionstore. no memorystore please
      success: onAdminAuthorizeSuccess, // *optional* callback on success - read more below
      fail: onAdminAuthorizeFail, // *optional* callback on fail/error - read more below
    })
  );

  function onAdminAuthorizeSuccess(data, accept) {
    if (data.user.role == "admin") accept();
    else accept(`Error: insufficient permissions!`);
  }

  function onAdminAuthorizeFail(data, message, error, accept) {
    if (error) console.log(new Error(message)); //Deny due to crit. err.
    return accept(new Error(message)); //Deny due to non-crit. err.
  }

  adminSocket.on("connection", function (socket) {
    if (
      socket.request.user &&
      socket.request.user.logged_in &&
      socket.request.user.role == "admin"
    ) {
      emitAdminStats(adminSocket, userSocket);
      socket.emit("update-userData", socket.request.user);
      socket.on("get-stats", () => {
        emitAdminStats(adminSocket, userSocket);
      });
    }
  });
};

/* GLOBAL EMITS */
function emitAdminStats(adminSocket, userSocket) {
  Promise.all([streamerDB.getLiveStreamerCount, userDB.getOnlinePlayerCount])
    .then((res) => {
      adminSocket.emit("stats", {
        liveStreamCount: res[0],
        onlinePlayerCount: res[1],
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
