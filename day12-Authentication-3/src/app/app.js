import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/auth", (req, res) => {
  res.status(200).json({
    Message: "welcome to auth",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

  const token = jwt.sign(
    {
      name,
      email,
    },
    "19ebb264fc4a892a6a4b019bb8b24a2b16fb2c8db6bcda92f7f77fc971d718373f03fa95313813c3aafbc01c820a29111d0c35292f9730837b5e2644bbb1b956",
  );

  res.status(201).json({
    Message: "user created successfully",
    user: {
      name,
      email,
    },
    token,
  });
});

export default app;
