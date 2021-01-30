const User = require("../schema/userSchema");
const twitchApi = require("../../twitch/apiClient");

async function getAllStreamerUsers(done) {
  await User.find({ "streamer.approved": true }, (err, result) => {
    if (err) console.log(err);
    else {
      return done(result);
    }
  });
}
async function getAllStreamerUsernames(done) {
  await getAllStreamerUsers((streamers) => {
    done(
      streamers.map((streamer) => {
        return streamer.username;
      })
    );
  });
}
async function getAllLiveStreamerData(done) {
  await User.find({ "streamer.live": true }, (err, result) => {
    if (err) console.log(err);
    else {
      return done(result);
    }
  });
}

exports.getAllStreamerUsers = getAllStreamerUsers;
exports.getAllStreamerUsernames = getAllStreamerUsernames;
exports.getAllLiveStreamerData = getAllLiveStreamerData;
