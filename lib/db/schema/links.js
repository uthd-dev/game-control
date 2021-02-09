import mongoose, { Schema } from 'mongoose';

const Link = new Schema({
    key: String,
    path: String,
    text: String,
    context: String,
    permLevel: Number,
});


export default mongoose.models.Link || mongoose.model("Link", Link, "links");
