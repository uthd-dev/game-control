#!/usr/bin/env node
//import modules
const express = require('express');
const next = require('next');
var Rcon = require('rcon');
var conn = new Rcon('localhost', 25575, 'password');
var connActive = false;
conn.on('auth', function() {
  console.log("Authed!");
  connActive = true;
}).on('response', function(str) {
  console.log("Got response: " + str);

}).on('end', function() {
  console.log("Socket closed!");
  process.exit();

}).on('error', function(err) {
  console.log(`RCON Connection Error: ${err}`);
  connActive = false;
});

conn.connect();
const apiRoutes = require('./routes/api/apiRouter.js');


/* Next.JS Setup */
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
        server.use('/api', apiRoutes);
        server.get('/_next*', handle);
        server.get('*', handle);
        server.post('/command', (req, res) => {
          if (req.body.password == "1234"){
            conn.send(req.body.command);
          }
          res.redirect('/command');
        });
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Listening on port ${port}`);
        });

    });
