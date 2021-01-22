const User = require('../schema/userSchema');

async function approveStreamer (doApprove, username) {
    try {
        await User.findOneAndUpdate({ username: username }, {'streamer.approved': doApprove}, (err, result) => {
            if(err) console.log(err);
            else console.log(`${doApprove ? `Successfully approved: ` : `Successfully dissapproved: `} ${username}`);
        });
    }catch(err) { console.log(err); }
}

exports.approveStreamer = approveStreamer;