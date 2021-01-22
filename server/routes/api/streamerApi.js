const streamerDB = require('../../lib/db/find/getAllStreamers');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    streamerDB.getAllStreamerUsernames(streamers => {
        sendResp(streamers);
    });
    
    function sendResp (streamers) {
        res.setHeader('Content-Type', 'application/json');
        res.json({
            streamers: streamers
        });
    }
});

module.exports = router;