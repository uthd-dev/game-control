const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const uid = require("uid-safe");

const sessionConfig = {
  secret: uid.sync(18),
  cookie: {
    maxAge: 86400 * 1000, // 24 hours in milliseconds
  },
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ url: process.env.dbConnUrl }),
};

module.exports.sessionManager = session(sessionConfig);
module.exports.sessionConfig = sessionConfig;
module.exports.cookieParser = cookieParser;
