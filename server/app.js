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
const getAllStreamers = require('./lib/db/find/getAllStreamers');
const approveStreamer = require('./lib/db/update/approveStreamer');


//Connect to RCON server
const conn = require('./lib/rcon/rcon');
conn.connect();

//Require Routers
const apiRoutes = require('./routes/api/apiRouter.js');
const authRoutes = require('./routes/accts');

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
const dev = false;
const app = next({
    dev,
    dir: './client/src'
});
module.exports = app;
const handle = app.getRequestHandler();

//Web-Server Port
const port = process.env.PORT || 80;

/* Next.JS implements Express */
app
    .prepare()
    .then(() => {
        const server = express();
        server.use(express.urlencoded());
        server.use(express.json());
        server.use(express.static('../client/public'));
        
        
      
        server.use(session(sessionConfig));
        server.use(passport.initialize());
        server.use(passport.session());
        server.use(cookieParser());

        /* ROUTING */
        server.use('/api', apiRoutes);
        server.use('/auth', authRoutes);
        server.get('/_next*', handle);
        server.get('/play', (req,res) => {
          res.redirect('/play/uthd');
        });
        server.get('/play*', (req, res) => {
          if(req.user) handle(req, res);
          else res.redirect('/');
        });
        
        server.get('/stream/onboarding', (req, res) => {
          if(req.user) {
            if(req.user.streamer.onboardingStarted) handle(req, res);
            else res.redirect('/stream');
          }
          else res.redirect('/stream');
        });
        server.get('/stream*', (req, res) => {
          if(req.user) handle(req, res);
          else res.redirect('/');
        });
        server.get('*', handle);
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Listening on port ${port}`);
            console.log(process.env.hostUrl);
        });

    });