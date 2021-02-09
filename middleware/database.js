import mongoose from "mongoose";

export default async function database(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    }
  } catch (err) {
    console.error(err);
  }

  return next();
}
