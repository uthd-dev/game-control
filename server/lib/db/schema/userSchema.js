// importing modules 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect(process.env.dbConnUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
const User = new Schema({
    twitchId: String,
    fname: String,
    displayName: String,
    email: String,
    tel: String,
    username: String,
    profileImg: String,
    provider: String,
    stats: Object,
    ign: String,
    streamer: Object
});
  
// export userschema 
 module.exports = new mongoose.model('User', User); 