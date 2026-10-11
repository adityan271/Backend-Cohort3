import mongoose from "mongoose";
import config from "./env.js";

async function connectDB() {
  await mongoose.connect(config.MONGO_URI);

  console.log("MongoDB connected succesfully");
}

export default connectDB;
