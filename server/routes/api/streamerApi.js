const streamerDB = require("../../lib/db/streamers");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  streamerDB.getAllStreamers()
  .then(streamers => {
    sendResp(streamers.map(streamer => {
      return streamer.username;
    }));
  })
  .catch(console.log(err));

  function sendResp(streamers) {
    res.setHeader("Content-Type", "application/json");
    res.json({
      streamers: streamers,
    });
  }
});

module.exports = router;
