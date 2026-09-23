import Imagekit from "@imagekit/nodejs";
import { Folders } from "@imagekit/nodejs/resources/index.mjs";

const storageInstance = new Imagekit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const sendFile = async (file, fileName) => {
  const obj = {
    file,
    fileName,
    Folder: "cohort-3",
  };
  return await storageInstance.upload(obj);
};
