const User = require('../schema/userSchema');

async function getAllStreamerUsers (done) {
    await User.find({ 'streamer.approved': true }, (err, result) => {
        if(err) console.log(err);
        else {
            return done(result);
        }
    });
}
async function getAllStreamerUsernames (done) {
        await getAllStreamerUsers((streamers) => {
            done(streamers.map(streamer => {
                return streamer.username;
            }));
        })
}

exports.getAllStreamerUsers = getAllStreamerUsers;
exports.getAllStreamerUsernames = getAllStreamerUsernames;