import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connecteDb(paams) {
  await mongoose.connect(process.env_MONGO_URI);
  console.log("MongoDB connected ");
}
