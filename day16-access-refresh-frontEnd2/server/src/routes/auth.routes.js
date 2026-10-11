import { Router } from "express";
import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.utils.js";

const router = Router();

/**
 * @POST /api/auth/register
 */

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body ?? {};
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await userModel.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    const user = await userModel.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash: await bcrypt.hash(password, 12),
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });
    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(201).json({
      message: "User registered successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
      accessToken,
    });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        message: "Registration data is invalid.",
        errors: Object.keys(error.errors).map((path) => ({
          path: path === "passwordHash" ? "password" : path,
          message: "Invalid value.",
        })),
      });
    }

    console.error("Registration failed.", {
      errorName: error?.name,
      errorCode: error?.code,
    });
    return res.status(500).json({
      message: "Registration could not be completed.",
    });
  }
});

/**
 * @GET /api/auth/me
 */

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  try {
    const decoded = verifyAccessToken(accessToken);

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized." });
    }

    res.status(200).json({
      message: "User fetched successfully",
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

/**
 * @POST /api/auth/refresh
 *
 */

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);

    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized, invalid or expired refresh token",
      });
    }

    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id,
    });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      message: "Token refresh successfull",
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    });
  }
});

export default router;
