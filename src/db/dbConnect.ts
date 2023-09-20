import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://mongo_db:27017/pbtech");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
