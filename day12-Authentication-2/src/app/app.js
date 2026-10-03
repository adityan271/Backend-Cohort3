import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.status(200).json({
    Message: "welcome to auth api",
  });
});

export default app;
