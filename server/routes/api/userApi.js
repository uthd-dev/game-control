const express = require("express");
const router = express.Router();

const connectEnsureLogin = require('connect-ensure-login');

router.get('/', connectEnsureLogin.ensureLoggedIn('/auth/twitch'), (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user: {
            twitchId: req.user.twitchId,
            name: req.user.name,
            email: req.user.email,
            username: req.user.username,
            profileImg: req.user.profileImg,
            provider: req.user.provider,
            shards: req.user.shards
        }
    });
});

module.exports = router;