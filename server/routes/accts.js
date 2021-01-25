const express = require("express");
const router = express.Router();
const passport = require('passport');


/* TWITCH AUTH STRATEGY */

const User = require('../lib/db/schema/userSchema');
const twitchStrategy = require('@d-fischer/passport-twitch').Strategy; 
passport.use(new twitchStrategy({
  clientID: process.env.twitchClientId,
  clientSecret: process.env.twitchClientSecret,
  callbackURL: `${process.env.hostUrl}/auth/twitch/callback`,
  scope: "user:read:email"
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({'twitchId': profile.id }, 
    function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
            twitchId: profile.id,
            fname: '',
            tel: '',
            displayName: profile.display_name,
            email: profile.email,
            username: profile.login,
            profileImg: profile.profile_image_url,
            provider: 'twitch',
            stats: {
              shards: 100,
            },
            ign: '',
            streamer: {
              onboardingStarted: false,
              approved: false
            }
        });
        user.save(function(err) {
            if (err) console.log(err);
            return done(err, user);
        });
      } else {
          return done(err, user);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* AUTH ROUTES */

router.get("/twitch", (req, res) => {
  if(req.query.returnTo) req.session.returnTo = req.query.returnTo;
  passport.authenticate("twitch", {forceVerify: false}, () => {

  })(req, res);
});

router.get("/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/" }), function(req, res) {
    // Successful authentication, redirect home.
    if(req.session.returnTo) {
      let returnTo = req.session.returnTo;
      req.session.returnTo = "/";
      res.redirect(`${process.env.hostUrl}${returnTo}`);
    }
    else res.redirect('/');
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;