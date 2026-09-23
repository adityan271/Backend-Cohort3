import Imagekit, { toFile } from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

const storageInstance = new Imagekit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const sendFile = async (file, fileName) => {
  const obj = {
    file: await toFile(file, fileName),
    fileName,
    folder: "backend",
  };
  return await storageInstance.files.upload(obj);
};
