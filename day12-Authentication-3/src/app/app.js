import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    Message: "welcome to auth",
  });
});

app.post("/api/auth/register", async (req, res) => {
  //body se data aata hai yaha
  const { email, name, password } = req.body;

  //save to database

  const user = await userModel.create({
    name,
    email,
    password,
  });

  // JWt token made
  const token = jwt.sign(
    {
      id: user._id,
    },
    "d06f7c3aebdeb4a96a9c0bbb60fc1d1f4f6b376ea9132bcd2542742067eceed101c3e1b965f0d6eb738fd04e60d77a3e307bf3c4c2f1d1753fe8a6a091ffbd18",
  );

  res.status(201).json({
    Message: "user created successfully",
    user: {
      name,
      email,
      id: user._id,
    },
    token,
  });
});

export default app;
