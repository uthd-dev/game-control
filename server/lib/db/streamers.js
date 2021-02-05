const User = require("./schema/userSchema");
const twitchApi = require("../twitch/apiClient");

/* ADD */
exports.addStreamerInfo = (twitchId, info) => {
  return User.findOneAndUpdate(
    { twitchId: twitchId },
    { $set: { ...info, "streamer.onboardingStarted": true } }
  );
};

/* GET */
exports.getAllStreamers = User.find({ "streamer.approved": true });

exports.getAllLiveStreamers = User.find({ "streamer.live": true });

exports.getLiveStreamerCount = User.countDocuments({ "streamer.live": true });

/* SET */
exports.setStreamerApprovedStatus = (twitchId, isApproved) => {
  return User.findOneAndUpdate(
    { twitchId: twitchId },
    { "streamer.approved": isApproved }
  );
};

/* UPDATE */
exports.updateStreamerLiveStatus = (twitchId) => {
  return new Promise((resolve, reject) => {
    twitchApi
      .isStreamerLive(twitchId)
      .then((isLive) => {
        User.findOneAndUpdate(
          { twitchId: twitchId },
          { "streamer.live": isLive }
        )
          .then(resolve())
          .catch(reject(`DB Error`));
      })
      .catch(reject(err));
  });
};
