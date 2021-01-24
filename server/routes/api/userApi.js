const express = require("express");
const router = express.Router();
const addStreamer = require('../../lib/db/add/addStreamer');

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
                streamer: req.user.streamer,
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
    if(req.user) {
        //Cast type to Strings and assign to variable
        let ign = `${req.body.ign}`;
        let fname = `${req.body.fname}`;

        //Null Check
        if(req.body.fname && req.body.ign) {
            //Validation
            if(fname.length <= 32 && ign.length <=16 && ign.length >= 3) {
                if(!req.user.streamer.onboardingStarted || !req.user.streamer.approved) {
                    const streamerInfo = {fname: fname, ign: ign, tel: req.body.tel ? `${req.body.tel}` : ""};

                    addStreamer.addStreamer(req.user, streamerInfo, success => {
                        if (success) {
                            console.log(`New Streamer Signup: ${fname} (${ign})`);
                            sendResp(true, `Added Streamer. Waiting for approval...`);
                        } else {
                            console.log(`New Streamer Signup Failed!! Streamer: ${fname} (${ign})`);
                            sendResp(false, `Uh Oh! Internal Server Error.`);
                        }
                    });
                }else sendResp(false, `Sorry! You've already started the Sign Up process!`);
            }else {
                sendResp(false, `Names must be under 32 characters. IGN's can only be 3-16 characters.`);
            }
        }
        //Partial null checks & corresponding errors
        else if(req.body.fname && !req.body.ign) {
            sendResp(false, "Please supply a valid IGN");
        }else if(!req.body.fname && req.body.ign) {
            sendResp(false, "Please supply a valid (legal) name");
        }else {
            sendResp(false, "Please fill out the form with the required fields");
        }
    }else{
        sendResp(false, "You must be signed in to sumbit this form. Please refresh the page");
    }

    //Send response to client with success status & message to be displayed
    function sendResp (success, response) {
        res.setHeader('Content-Type', 'application/json');
        res.json({
            success: success,
            response: response
        });
    }
});

module.exports = router;