const User = require("../schema/userSchema");

exports.getOnlinePlayerCount = User.countDocuments({ online: true });
exports.setOnlinePlayerStatus = (username, isOnline) => {
  return User.findOneAndUpdate({ username: username }, { online: isOnline });
};
