import Twitch from "@d-fischer/passport-twitch";
import User from "../db/schema/users"

export default new Twitch.Strategy(
  {
    clientID: process.env.twitchClientId,
    clientSecret: process.env.twitchClientSecret,
    callbackURL: `${process.env.HOST_URL}/api/auth/twitch/callback`,
    scope: "user:read:email",
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ twitchId: profile.id }, function (err, user) {
        //Error first
        if (err) {
          return done(err);
        }
        //Make sure user does not already exist
        if (!user) {
          //Create new user with these default values (follows schema in lib/db/schema/)
          user = new User({
            twitchId: profile.id,
            fname: "",
            tel: "",
            displayName: profile.display_name,
            email: profile.email,
            username: profile.login,
            profileImg: profile.profile_image_url,
            provider: "twitch",
            stats: {
              //TODO: Turn shards into and object with a key for each streamer that the user has shards for
              //eg. Global Shards ---> Per streamer shards
              shards: 100,
            },
            ign: "",
            streamer: {
              onboardingStarted: false,
              approved: false,
              live: false,
            },
            permLevel: 0,
            online: false,
          });
          user.save(function (err) {
            if (err) console.log(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
  }
);
