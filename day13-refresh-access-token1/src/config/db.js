import mongoose from "mongoose";
import config from "./config.js";

export async function connectToDb() {
  await mongoose.connect(config.MONGO_URI);
  console.log("connected to the database");
}
