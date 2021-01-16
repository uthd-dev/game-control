// importing modules 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
const User = new Schema({
    twitchId : String,
    name : String,
    email: String,
    username: String,
    profileImg: String,
    provider: String,
    stats: Object,
    ign: String
});
  
// export userschema 
 module.exports = new mongoose.model('User', User); 