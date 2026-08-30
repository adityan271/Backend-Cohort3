const express = require("express");
//mongoose
const connectDb = require("./config/database");

const app = express();

connectDb();

app.get("/", (req, res) => {
  res.send("Ok i'm chalu");
});

module.exports = app;
