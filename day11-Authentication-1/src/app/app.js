import express from "express";
import jwt from "jsonwebtoken";

const app = express();

//Middleware - express.json() reads the json data from frontend
app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Welcome to the authentication API" });
});

app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;

    const token = jwt.sign(
        {
            email,
            name,
        },
        "b79c2bc076e74b15a0742233baf443c7ca9961a26bb50c5660f1fb0db317d829",
    );

    res.status(201).json({
        message: "user created successfully",
        data: {
            user: {
                email,
                name,
            },
            token,
        },
    });
});

export default app;
