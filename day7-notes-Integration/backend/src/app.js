// sari main functionality hold krta hai
const express = require("express");
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok chalu hai");
});

app.use("/notes", notesRoute);

module.exports = app;
