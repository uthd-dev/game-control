const express = require("express");
const router = express.Router();

const connectEnsureLogin = require('connect-ensure-login');

router.get('/', (req, res) => {
    if(req.user) {
        res.setHeader('Content-Type', 'application/json');
        res.json({
            user: {
                twitchId: req.user.twitchId,
                fname: req.user.fname,
                displayName: req.user.displayName,
                email: req.user.email,
                tel: req.user.tel,
                username: req.user.username,
                ign: req.user.ign,
                profileImg: req.user.profileImg,
                provider: req.user.provider,
                stats: req.user.stats,
                loggedIn: true
            }
        });
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.json({
            user: {
                loggedIn: false
            }
        });
    }

});

router.post('/streamer-signup', (req, res) => {
    let success = false;
    let response = "";

    if(req.body.fname && req.body.ign) {
        console.log(req.body.fname + req.body.ign);
        success = true; response = "Name & IGN Valid";
        req.session.onboardingStarted = true;
    }else if(req.body.fname && !req.body.ign) {
        console.log(req.body.fname);
        success = false; response = "Please supply a valid IGN";
    }else if(!req.body.fname && req.body.ign) {
        console.log(req.body.ign);
        success = false; response = "Please supply a valid (legal) name";
    }else {
        success = false; response = "Please fill out the form with the required fields"
    }

    res.setHeader('Content-Type', 'application/json');
    res.json({
        success: success,
        response: response
    });
});

module.exports = router;