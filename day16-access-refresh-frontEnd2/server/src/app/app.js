import express from "express";
import authRoutes from "../routes/auth.routes.js"
import cookieParser from "cookie-parser";

const app = express();

app.use((req, res, next) => {
  const origin = req.get("origin");
  if (origin === "http://localhost:5173") {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Vary", "Origin");

    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
  }

  next();
});

app.use(express.json());
app.use(cookieParser())

//api
app.use("/api/auth", authRoutes)

export default app;
