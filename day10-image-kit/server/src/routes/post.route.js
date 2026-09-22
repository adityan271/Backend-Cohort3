import express from "express";
import { upload } from "../config/multer.config";
const router = express.Router();

router.post("/create", upload.single("image"), createPost);

export default router;
