const User = require("../schema/userSchema");
const twitchApi = require("../../twitch/apiClient");

async function setStreamerApprovedStatus(isApproved, username, done) {
  try {
    await User.findOneAndUpdate(
      { username: username },
      { "streamer.approved": isApproved },
      (err) => {
        if (err) {
          console.log(err);
          done(false, `DB Error: Could not save streamer status!`);
        } else {
          console.log(
            `${
              isApproved
                ? `Successfully approved: `
                : `Successfully dissapproved: `
            } ${username}`
          );
          done(
            true,
            `${
              isApproved
                ? `Successfully approved: `
                : `Successfully dissapproved: `
            } ${username}`
          );
        }
      }
    );
  } catch (err) {
    console.log(err);
    done(false, err);
  }
}
async function setStreamerLiveStatus(isLive, username, done) {
  if (await twitchApi.isStreamerLive(username)) {
    try {
      await User.findOneAndUpdate(
        { username: username },
        { "streamer.live": isLive },
        (err) => {
          if (err) console.log(err);
          else
            console.log(
              `${
                isLive
                  ? `${username} is now live on UTHD MC! `
                  : `${username} is no longer live. `
              }`
            );
        }
      );
    } catch (err) {
      console.log(err);
      done(false, err);
    }
  }
}

exports.setStreamerApprovedStatus = setStreamerApprovedStatus;
exports.setStreamerLiveStatus = setStreamerLiveStatus;
