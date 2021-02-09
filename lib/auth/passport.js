import passport from "passport";
import twitchStrategy from "./passport-twitch"
import User from '../db/schema/users'

passport.use(twitchStrategy)

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  //Requires req.user calls to use DB values to make sure that user objects and DB are synced.
  User.findById(id).then(user => {
    done(null, user);
  })
});

export default passport