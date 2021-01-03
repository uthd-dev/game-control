// importing modules 
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

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
    shards: Number
}); 
  
User.plugin(findOrCreate);

// export userschema 
 module.exports = new mongoose.model('User', User); 