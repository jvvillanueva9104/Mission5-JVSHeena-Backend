import mongoose from "mongoose";

export const dbDisconnect = async () => mongoose.disconnect();
