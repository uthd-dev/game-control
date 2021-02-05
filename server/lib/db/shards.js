const User = require("../userSchema");

exports.setShards = (twitchId, numberOfShards) => {
  //Finds user based on Twitch ID from MongoDB and updates the value of shards.
  return User.findOneAndUpdate(
    { twitchId: twitchId },
    { shards: numberOfShards }
  );
};
exports.addShards = (twitchId, numberOfShards) => {
  return User.find({ twitchId: twitchId }).then((result) => {
    return User.findOneAndUpdate(
      { twitchId: twitchId },
      { shards: result.stats.shards + numberOfShards }
    );
  });
};
exports.spendShards = (twitchId, numberOfShards) => {
  return User.find({ twitchId: twitchId }).then((result) => {
    if (result.stats.shards >= numberOfShards) {
      return User.findOneAndUpdate(
        { twitchId: twitchId },
        { shards: result.stats.shards - numberOfShards }
      );
    }
  });
};
