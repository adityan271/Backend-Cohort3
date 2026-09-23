import postModel from "../models/post.model.js";
import { sendFile } from "../services/storage.service.js";

export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    if (!caption || !file)
      return res.status(400).json({
        success: false,
        message: "Caption and image are required",
      });

    const uploadImage = await sendFile(file.buffer, file.originalname);

    const post = await postModel.create({
      caption,
      image: uploadImage.url,
    });

    return res.status(201).json({ success: true, post });
  } catch (error) {
    console.error("Failed to create post:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create post",
    });
  }
};
