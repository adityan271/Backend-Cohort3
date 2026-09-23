import postModel from "../models/post.model.js";

export const createPost = async (req, res) => {

    const {caption} = req.body
    const file = req.file

    console.log(file)
    return res.status(201).json({ caption, fileReceived: Boolean(file) });
};
