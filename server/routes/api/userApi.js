const express = require("express");
const router = express.Router();
const userDB = require("../../lib/db/users");
const streamerDB = require("../../lib/db/streamers");

class User {
  constructor(user) {
    this.fname = user.fname;
    this.displayName = user.displayName;
    this.email = user.email;
    this.tel = user.tel;
    this.username = user.username;
    this.ign = user.ign;
    this.profileImg = user.profileImg;
    this.stats = user.stats;
    this.streamer = user.streamer;
    this.online = user.online;
  }
}

router.get("/self", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.user)
    res.json({
      ...new User(req.user),
      loggedIn: true,
    });
  else res.json({ loggedIn: false });
});

router.get("/:username", (req, res) => {
  if (req.user) {
    if (req.user.role == "admin") {
      res.setHeader("Content-Type", "application/json");
      userDB
        .getUserbyUsername(`${req.params.username}`)
        .then((user) => {
          if (user) res.json(new User(user));
          else res.json({});
        })
        .catch((err) => {
          console.log(err);
          res.status(500).end(`Internal Server Error`);
        });
    } else res.status(403).end(`403 Permission Denied`);
  } else res.json({ loggedIn: false });
});

router.post("/streamer-signup", (req, res) => {
  if (req.user) {
    //Cast type to Strings and assign to variable
    let ign = `${req.body.ign}`;
    let fname = `${req.body.fname}`;

    //Null Check
    if (req.body.fname && req.body.ign) {
      //Validation
      if (fname.length <= 32 && ign.length <= 16 && ign.length >= 3) {
        if (req.user.streamer.onboardingStarted == false) {
          const streamerInfo = {
            fname: fname,
            ign: ign,
            tel: req.body.tel ? `${req.body.tel}` : "",
          };

          streamerDB.addStreamer(req.user, streamerInfo, (success) => {
            if (success) {
              console.log(`New Streamer Signup: ${fname} (${ign})`);
              sendResp(
                true,
                `Success! Check your profile for when you get approved.`
              );
            } else {
              console.log(
                `New Streamer Signup Failed!! Streamer: ${fname} (${ign})`
              );
              sendResp(false, `Uh Oh! Internal Server Error.`);
            }
          });
        } else
          sendResp(false, `Sorry! You've already started the Sign Up process!`);
      } else {
        sendResp(
          false,
          `Names must be under 32 characters. IGN's can only be 3-16 characters.`
        );
      }
    }
    //Partial null checks & corresponding errors
    else if (req.body.fname && !req.body.ign) {
      sendResp(false, "Please supply a valid IGN");
    } else if (!req.body.fname && req.body.ign) {
      sendResp(false, "Please supply a valid (legal) name");
    } else {
      sendResp(false, "Please fill out the form with the required fields");
    }
  } else {
    sendResp(
      false,
      "You must be signed in to sumbit this form. Please refresh the page"
    );
  }

  //Send response to client with success status & message to be displayed
  function sendResp(success, response) {
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: success,
      response: response,
    });
  }
});

module.exports = router;
