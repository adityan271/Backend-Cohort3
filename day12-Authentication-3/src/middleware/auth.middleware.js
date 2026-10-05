import jwt from "jsonwebtoken";
import userModel from "../models/user.model";

export const authentication = async (req, res, next) => {
  const token = req.headers.authorization;

  const data = jwt.decode(token);

  const user = userModel.findById(data.id);

  req.user = user;

  next();
};
