import mongoose, { Schema } from 'mongoose';

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
  permLevel: Number,
  online: Boolean,
});


export default mongoose.models.User || mongoose.model("User", User);
