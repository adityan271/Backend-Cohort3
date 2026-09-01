const express = require("express");
const connectDb = require("./config/db");
const notesModel = require("./models/note.model");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("Done");
});
app.post("/create", (req, res) => {
  let { title, description } = req.body;

  const newNotes = notesModel.create({
    title,
    description,
  });
  res.send({
    success: true,
    message: "note created",
    data: newNotes,
  });
});

module.exports = app;
