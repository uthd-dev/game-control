const User = require("../schema/userSchema");

const updateIGN = (twitchUser, ign, done) => {
  User.findOneAndUpdate(
    { twitchId: twitchUser.twitchId },
    { ign: ign },
    function (err, result) {
      if (err) {
        console.log(
          `Error! Could not set user ${twitchUser.name}'s IGN to ${ign}`
        ); //I love backtick concantenation, wait...
        console.log(err);

        //Custom Callback function
        return done(
          false,
          `Uh Oh! Something went wrong! Try again later and please let us know.`
        );
      } else {
        console.log(`Success! Set the user ${twitchUser.name}'s IGN to ${ign}`);
        console.log(result);

        return done(true, `Success! Your Minecraft IGN is now set to ${ign}`);
      }
    }
  );
};

exports.updateIGN = updateIGN;
