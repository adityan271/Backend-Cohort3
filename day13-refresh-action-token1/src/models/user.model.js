import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 3,
    maxlenght: 50,
  },
  email: {
    type: String,
    required: true,
  },

  passwordHash: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
