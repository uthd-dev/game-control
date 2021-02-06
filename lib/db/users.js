import User from "./schema/users"

/* ADD */

/* GET */
export const getUserbyUsername = (username) => {
  return User.findOne({'username': username})
}
export const getAllUsers = User.find({});
export const getOnlineUserCount = User.countDocuments({ online: true });

/* SET */
export const setUserOnlineStatus = (twitchId, isOnline) => {
  return User.findOneAndUpdate({ twitchId: twitchId }, { online: isOnline });
};
export const setIGN = (twitchId, newIGN) => {
  return User.findOneAndUpdate(
    { twitchId: twitchId },
    { ign: newIGN });
}