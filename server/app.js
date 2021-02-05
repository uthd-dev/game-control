#!/usr/bin/env node
/* IMPORT MODULES */
require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");

/* Authentication */
const passport = require("passport");

/* Sessions */
const cookieParser = require("./lib/sessions").cookieParser;
const sessionManager = require("./lib/sessions").sessionManager;

/* Routing */
const apiRoutes = require("./routes/api/apiRouter.js");
const authRoutes = require("./routes/accts");

/* Next.JS Setup */

//Next.JS Config
let dev = process.env.NODE_ENV !== "production";
const nextApp = next({
  dev,
  dir: "./client/src",
});
const handle = nextApp.getRequestHandler();

//Web-Server Port
const port = process.env.PORT ? parseInt(process.env.PORT) : 80;

/* Next.JS implements Express */
nextApp.prepare().then(() => {
  init();

  app.use(express.urlencoded());
  app.use(express.json());
  app.use(express.static("../client/public"));

  app.use(sessionManager);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser());

  /* ROUTING */
  app.use("/api", apiRoutes);
  app.use("/auth", authRoutes);
  app.get("/_next*", handle);
  app.get("/play", (req, res) => {
    res.redirect("/play/uthd");
  });
  app.get("/admin*", (req, res) => {
    if (req.user) {
      if (req.user.role == "admin") handle(req, res);
      else res.redirect("/");
    } else res.redirect("/");
  });
  app.get("/play*", (req, res) => {
    if (req.user) handle(req, res);
    else res.redirect("/");
  });

  app.get("/stream/onboarding", (req, res) => {
    if (req.user) {
      if (req.user.streamer.onboardingStarted) handle(req, res);
      else res.redirect("/stream");
    } else res.redirect("/stream");
  });
  app.get("/stream*", (req, res) => {
    if (req.user) handle(req, res);
    else res.redirect("/");
  });
  app.get("*", handle);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${port}`);
  });
}).catch(err => {throw err});

function init() {

  /* Socket.io */
  const io = require("socket.io")(server);
  const socketServer = require("./lib/ws/frontend").server(io);

}