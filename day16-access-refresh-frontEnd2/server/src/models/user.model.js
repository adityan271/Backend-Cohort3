import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name must be at most 50 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
