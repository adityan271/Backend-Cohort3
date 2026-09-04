const express = require("express");
const fileRoutes = require("./routes/file.route")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("backend running successsfully");
});

app.use("/file",fileRoutes)

module.exports = app;
