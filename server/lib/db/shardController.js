const User = require('../userSchema');

const setShards = (twitchUser, numberOfShards, done) => {
    //Finds user based on Twitch ID from MongoDB and updates the value for shards.
    User.findOneAndUpdate({'twitchId': twitchUser.twitchId }, { 'shards': numberOfShards }, function(err, result) {
        if(err) {
            console.log(`Error! Could not set shards for user: ${twitchUser.name}`); //I love backtick concantenation, wait...
            console.log(err);

            //Custom Callback function
            return done(err);
        }else {
            console.log(`Success! Set the user: ${twitchUser.name}'s shards to ${numberOfShards}`);
            console.log(result);
            return done(result);
        }
    }); 
}

const addShards = (twitchUser, numberOfShards, done) =>  {
    let newNumberOfShards = twitchUser.stats.shards + numberOfShards;
    User.findOneAndUpdate({'twitchId': twitchUser.twitchId }, { 'shards': newNumberOfShards }, function(err, result) {
        if(err) {
            console.log(`Error! Could not add ${numberOfShards} shards for user: ${twitchUser.name}`);
            console.log(err);
            return done(err);
        }else {
            console.log(`Success! Added ${numberOfShards} to ${twitchUser.name}'s balance`);
            console.log(result);
            return done(result);
        }
    });
}

const spendShards = (twitchUser, numberOfShards, done) => {
    if(twitchUser.shards >= numberOfShards) {
        let newNumberOfShards = twitchUser.stats.shards - numberOfShards;
        User.findOneAndUpdate({'twitchId': twitchUser.twitchId }, { 'shards': newNumberOfShards }, function(err, result) {
            if(err) {
                console.log(`Error! Could not spend ${numberOfShards} shards for user: ${twitchUser.name}`);
                console.log(err);
                return done(false, `An error occurred while processing your request, please try again later and let us know this happened!`);
            }else {
                console.log(`Success! Spent ${numberOfShards} from ${twitchUser.name}'s balance`);
                console.log(result);
                return done(true, `Woohoo! Thank you? Depends on what you sent... Uh Oh`);
            }
        });
    }else {
        return done(false, `Not Enough Shards!`);
    }
}

exports.setShards = setShards;
exports.addShards = addShards;
exports.spendShards = spendShards;