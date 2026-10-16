import express from "express";
import { register } from "../controllers/auth.controller.js";
import { registerValidation } from "../validator/auth.validator.js";

const router = express.Router();

router.post("/register", registerValidation, register);

export default router;
