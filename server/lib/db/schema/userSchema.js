// importing modules
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

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
  streamer: Object,
  role: String,
  online: Boolean,
});

// export userschema
module.exports = new mongoose.model("User", User);
