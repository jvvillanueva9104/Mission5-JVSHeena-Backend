import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pbtech");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};
