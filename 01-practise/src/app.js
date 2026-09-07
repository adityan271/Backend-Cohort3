const express = require("express");

const app = express();

app.get("/", (res, req) => {
  req.send("app is running");
});

module.exports = app;
