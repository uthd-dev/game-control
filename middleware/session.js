import session from "express-session";
import connectMongo from "connect-mongo";

const MongoStore = connectMongo(session);

const sessionConfig = {
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 28800 * 1000, // 8 hours in milliseconds
  },
  resave: false,
  saveUninitialized: false,
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
