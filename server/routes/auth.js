const express = require("express");
const router = express.Router();
const passport = require('passport');


/* TWITCH AUTH STRATEGY */

const User = require('../lib/db/userSchema');
const twitchStrategy = require('@d-fischer/passport-twitch').Strategy; 
passport.use(new twitchStrategy({
  clientID: '4fz0ei80kvy753bgidq6hchabffnr3',
  clientSecret: 'j61tx748h2zvqya6yk0p7dqu3cmka7',
  callbackURL: "http://localhost:3000/auth/twitch/callback",
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
            name: profile.display_name,
            email: profile.email,
            username: profile.login,
            profileImg: profile.profile_image_url,
            provider: 'twitch',
            shards: 0
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

router.get("/twitch", passport.authenticate("twitch", {forceVerify: true}));
router.get("/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/fail" }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/play");
});

module.exports = router;