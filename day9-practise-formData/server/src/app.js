const express = require("express");
const userRoutes = require("./routes/user.routes");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/user", userRoutes);

module.exports = app;
