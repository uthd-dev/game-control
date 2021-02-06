import mongoose, { Schema } from 'mongoose';

const Link = new Schema({
    key: String,
    href: String,
    role: String,
    context: String,
    text: String,
});


export default mongoose.models.Link || mongoose.model("Link", Link, "links");
