const User = require("../schema/userSchema");
const twitchApi = require("../../twitch/apiClient");

async function getAllStreamers(done) {
  await User.find({ "streamer.approved": true }, (err, result) => {
    if (err) console.log(err);
    else {
      return done(result);
    }
  });
}
async function getAllLiveStreamers(done) {
  await User.find({ "streamer.live": true }, (err, result) => {
    if (err) console.log(err);
    else return result;
  });
}

exports.getAllStreamers = getAllStreamers;
exports.getAllLiveStreamers = getAllLiveStreamers;
exports.getLiveStreamerCount = User.countDocuments({ "streamer.live": true });
