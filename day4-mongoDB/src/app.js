const express = require("express");
//mongoose
const connectDb = require("./config/database");
const NotesModel = require("./model/note.model");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("Ok i'm chalu");
});

app.post("/create", async (req, res) => {
  let { title, description } = req.body;

  const newNote = await NotesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "note created successfully",
    data: newNote,
  });
});

// module.exports = app;

module.exports = app;
