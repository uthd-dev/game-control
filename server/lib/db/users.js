const User = require("./schema/userSchema");

/* ADD */



/* GET */
exports.getUserbyUsername = (username) => {
  return User.findOne({'username': username})
}
exports.getAllUsers = User.find({});
exports.getOnlineUserCount = User.countDocuments({ online: true });


/* SET */
exports.setUserOnlineStatus = (twitchId, isOnline) => {
  return User.findOneAndUpdate({ twitchId: twitchId }, { online: isOnline });
};
exports.setIGN = (twitchId, newIGN) => {
  return User.findOneAndUpdate(
    { twitchId: twitchId },
    { ign: newIGN });
}