const express = require("express");
const router = express.Router();
const passport = require("passport");

/* TWITCH AUTH STRATEGY */

const User = require("../lib/db/schema/userSchema");
const twitchStrategy = require("@d-fischer/passport-twitch").Strategy;
passport.use(
  new twitchStrategy(
    {
      clientID: process.env.twitchClientId,
      clientSecret: process.env.twitchClientSecret,
      callbackURL: `${process.env.hostUrl}/auth/twitch/callback`,
      scope: "user:read:email",
    },
    function (accessToken, refreshToken, profile, done) {
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
            role: "user",
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
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  //Requires req.user calls to use DB values to make sure that user objects and DB are synced.
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

/* AUTH ROUTES */

//APP ---> TWITCH
router.get("/twitch", (req, res) => {
  //If passed as returnTo Url parameter, saves value to session for redirecting back later.
  if (req.query.returnTo) req.session.returnTo = `${req.query.returnTo}`;

  //Checks if urlParamter verify is true to decide whether to send user to Twitch ForceVerify Page. (Also allows them to switch accounts)
  function doVerify() {
    if (req.query.verify) return req.query.verify == "true" ? true : false;
  }

  //Authenticate with Passport-Twitch Middleware, passing req & res object since we're inside of a custom function.
  passport.authenticate("twitch", { forceVerify: doVerify() })(req, res);
});

//TWITCH ---> APP
router.get(
  "/twitch/callback",
  passport.authenticate("twitch", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home (default) or returnTo (from session), and reset returnTo.
    if (req.session.returnTo) {
      let returnTo = req.session.returnTo;
      req.session.returnTo = "/";
      res.redirect(`${process.env.hostUrl}${returnTo}`);
    } else res.redirect("/");
  }
);

//Simple logout route, removes user session/cookie for this appl., but doesn't log user out of Twitch itself.
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
