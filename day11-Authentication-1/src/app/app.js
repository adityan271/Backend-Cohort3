import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const app = express();

//Middleware - express.json() reads the json data from frontend
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Welcome to the authentication API" });
});

app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    "b79c2bc076e74b15a0742233baf443c7ca9961a26bb50c5660f1fb0db317d829",
  );

  res.status(201).json({
    message: "user created successfully",
    data: {
      user: {
        email,
        name,
        id: user._id,
      },
      token,
    },
  });
});

app.get("/api/auth/me", async (req, res) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  const data = jwt.decode(authHeader);

  console.log(data);

  const user = await userModel.findById(data.id);

  console.log(user);
});

export default app;
