const User = require('../schema/userSchema');

function addStreamer (user, session, done) {
    User.findOneAndUpdate({'twitchId': user.twitchId }, { "$set": {"fname": session.fname, "ign": session.ign, "tel": session.tel} }, function(err, result) {
        if(err) {
            console.log(`Error! Could not add Streamer ${user.name} to the Database.`); //I love backtick concantenation, wait...
            console.log(err);

            //Custom Callback function
            return done(false, `Uh Oh! Something went wrong! Try again later and please let us know this happened.`);
        }else {
            console.log(`Success! Added the streamer: ${user.name}`);
            console.log(result);

            return done(true, `Success! We'll get back to you ASAP if/when you've been approved.`);
        }
    }); 
}

exports.addStreamer = addStreamer;