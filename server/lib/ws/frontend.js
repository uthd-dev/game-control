const sessionConfig = require("../sessions").sessionConfig;
const cookieParser = require("../sessions").cookieParser;
const passportSocketIo = require("passport.socketio");

const streamerDB = require("../db/streamers");
const userDB = require("../db/users");
const discord = require("../discord/bot");

let userSocket;
let adminSocket;

function init(io) {
  userSocket = io.of("/api/ws/user");
  adminSocket = io.of("/api/ws/admin");
}

function wsServer(io) {
  init(io);

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
  //Callbacks
  function onUserAuthorizeSuccess(data, accept) {
    accept();
  }
  function onUserAuthorizeFail(data, message, error, accept) {
    if (error) console.log(new Error(message)); //Deny due to crit. err.
    return accept(new Error(message)); //Deny due to non-crit. err.
  }

  //Connection Handler (Sets WS user's online status in DB and pushes update to adminSocket)
  userSocket.on("connection", (socket) => {
    socket.emit("update-userData", socket.request.user);
    userDB
      .setUserOnlineStatus(socket.request.user.twitchId, true)
      .then(emitAdminStats())
      .catch(console.log(err));

    socket.on(
      "disconnect",
      userDB
        .setUserOnlineStatus(socket.request.user.twitchId, false)
        .then(emitAdminStats())
        .catch(console.log(err))
    );
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
  //Connection Handler
  adminSocket.on("connection", function (socket) {
    emitAdminStats();
    socket.emit("update-userData", socket.request.user);
    //Event Handlers
    socket.on("get-stats", () => {
      emitAdminStats();
    });
    socket.on("toggle-discord", () => {
      if (discord.isOnline()) {
        discord
          .login()
          .then(emitAdminStats())
          .catch((err) => console.log(err));
      } else {
        discord
          .logout()
          .then(emitAdminStats())
          .catch((err) => console.log(err));
      }
    });
  });
}

function emitAdminStats() {
  Promise.all([streamerDB.getLiveStreamerCount, userDB.getOnlineUserCount])
    .then((res) => {
      adminSocket.emit("stats", {
        liveStreamCount: res[0],
        onlinePlayerCount: res[1],
        connectedServerCount: 0,
        discordIsOnline: discord.isOnline(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports.server = wsServer;
module.exports.emitAdminStats = emitAdminStats;
