import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //is user already exists
  const ifUserExists = await userModel.findOne({ email });
  if (ifUserExists) {
    return res.status(400).json({
      message: "User already exists",
      errors: [
        {
          path: "email",
          message: "User already exists",
        },
      ],
    });
  }

  // create user
  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 12),
  });
});

export default router;
