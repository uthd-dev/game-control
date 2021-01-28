const sessionConfig = require('../sessions').sessionConfig;
const cookieParser = require('../sessions').cookieParser;
const passportSocketIo = require('passport.socketio');


exports = module.exports = (io) => {
    io.use(passportSocketIo.authorize({   /* From: https://github.com/jfromaniello/passport.socketio */
        cookieParser: cookieParser,       
        key:          'connect.sid',       // the name of the cookie where express/connect stores its session_id
        secret:       sessionConfig.secret,    // the session_secret to parse the cookie
        store:        sessionConfig.store,        // we NEED to use a sessionstore. no memorystore please
        success:      onAuthorizeSuccess,  // *optional* callback on success - read more below
        fail:         onAuthorizeFail,     // *optional* callback on fail/error - read more below
    }));
    
    function onAuthorizeSuccess(data, accept) {
        console.log(`New socket data: ${data}`);
        accept();
    }

    function onAuthorizeFail(data, message, error, accept){
        if(error) throw new Error(message); //Deny due to crit. err.
        return accept(new Error(message)); //Deny due to non-crit. err.
    }

    io.on('connection', function(socket){
        if (socket.request.user && socket.request.user.logged_in) {
            socket.emit("update-userData", socket.request.user);
        }
    });
}