import session from "express-session";
import connectMongo from "connect-mongo";
import uid from "uid-safe";
import { mongo } from "mongoose";

const MongoStore = connectMongo(session);

const sessionConfig = {
  secret: uid.sync(18),
  cookie: {
    maxAge: 28800 * 1000, // 8 hours in milliseconds
  },
  resave: false,
  saveUninitialized: true,
};

export default function sessionMiddleware(req, res, next) {
  const mongoStore = new MongoStore({
    mongooseConnection: global.mongoose.connection
  });
  return session({
    ...sessionConfig,
    store: mongoStore
  })(req, res, next);
}
