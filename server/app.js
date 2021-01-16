#!/usr/bin/env node
/* IMPORT MODULES */
const express = require('express');
const next = require('next');
const passport = require('passport');
const session = require('express-session');
var cookieParser   = require("cookie-parser");
const uid = require('uid-safe');
const connectEnsureLogin = require('connect-ensure-login');
const mc = require('./lib/rcon/minecraftApi');


//Connect to RCON server
const conn = require('./lib/rcon/rcon');
conn.connect();

//Require Routers
const apiRoutes = require('./routes/api/apiRouter.js');
const authRoutes = require('./routes/auth');

const sessionConfig = {
  secret: uid.sync(18),
  cookie: {
    maxAge: 86400 * 1000 // 24 hours in milliseconds
  },
  resave: false,
  saveUninitialized: true
};

/* Next.JS Setup */

//Next.JS Config
const dev = true;
const app = next({
    dev,
    dir: './client/src'
});
module.exports = app;
const handle = app.getRequestHandler();

//Web-Server Port
const port = process.env.PORT || 3000;

/* Next.JS implements Express */
app
    .prepare()
    .then(() => {
        const server = express();
        server.use(express.urlencoded());
        server.use(express.static('../client/public'));
        
      
        server.use(session(sessionConfig));
        server.use(passport.initialize());
        server.use(passport.session());
        server.use(cookieParser());

        /* ROUTING */
        server.use('/api', apiRoutes);
        server.use('/auth', authRoutes);
        server.get('/_next*', handle);
        server.get('/play', connectEnsureLogin.ensureLoggedIn('/auth/twitch'), (req, res) => {
          res.redirect('/play/uthd');
        });
        server.get('/', (req, res) => {
          res.redirect('/stream');
        });
        server.get('/command', (req, res) => {
          if(req.user) {
            if(req.user.username == "pi_man31415") {
              if(req.query.command == "kill"){
                mc.kill();
              }
              handle(req, res);
            }else {
              console.log(`${req.user.username} accessed the kill switch!`);
              handle(req, res);
            }
            console.log(`User: ${req.user.username} tried to load the Kill Button Page!`);
          }else {
            res.redirect('/stream');
          }
          
        });
        server.get('*', handle);
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Listening on port ${port}`);
        });

    });

module.exports.log = (message) => {
  console.log(message);
}