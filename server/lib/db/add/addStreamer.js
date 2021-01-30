const User = require("../schema/userSchema");

async function addStreamer(user, streamerInfo, done) {
  //If a phone number is present -> Set it in the DB as well
  if (streamerInfo.tel)
    await User.findOneAndUpdate(
      { twitchId: user.twitchId },
      {
        $set: {
          fname: streamerInfo.fname,
          ign: streamerInfo.ign,
          tel: streamerInfo.tel,
        },
      },
      (err) => {
        if (err) finish(true, user, done);
        else finish(false, user, done);
      }
    );
  //If no phone # was entered
  else if (!streamerInfo.tel)
    await User.findOneAndUpdate(
      { twitchId: user.twitchId },
      { $set: { fname: streamerInfo.fname, ign: streamerInfo.ign } },
      (err) => {
        if (err) finish(true, user, done);
        else finish(false, user, done);
      }
    );
}
async function finish(err, user, done) {
  if (err) {
    console.log(
      `Error! Could not add Streamer ${user.displayName} to Users DB.`
    ); //I love backtick concantenation, wait...
    console.log(err);

    //Custom Callback function
    return done(false);
  } else {
    console.log(
      `Success! Added the streamer, ${user.displayName} to Users DB.`
    );
    await setOnboardingStarted(user); //Do I really need this await?

    return done(true);
  }
}

//Marks user as starting
async function setOnboardingStarted(user) {
  //Short-term; until restart
  user.streamer.onboardingStarted = true;
  //Long-term; saved to DB
  await User.findOneAndUpdate(
    { twitchId: user.twitchId },
    { "streamer.onboardingStarted": true },
    (err, result) => {
      err ? console.log(err) : console.log(result);
    }
  );
}

exports.addStreamer = addStreamer;
