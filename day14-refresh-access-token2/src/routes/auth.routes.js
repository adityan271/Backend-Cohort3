import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyAccessToken } from "../utils/auth.utils.js";

const router = Router();

/**
 * @POST /api/auth/register
 */

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

  const { accessToken, refreshToken } = generateTokens({ userId: user._id });

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  res.status(201).json({
    message: "User registered succcesfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    accessToken,
  });
});

/**
 * @GET /api/auth/me
 */

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split("")[1];

  try {
    const decoded = verifyAccessToken(accessToken);

    const user = await userModel.findByid(decoded.id);
    res.status(200).json({
      message: "user fecthed successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized Invalid or expired access token",
    });
  }
});

export default router;
