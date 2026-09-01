const express = require("express");
const notesModel = require("./models/notes.model");
const connectDb = require("./config/db");
const createNotesController = require("./controllers/notes.controller");

const app = express();

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok chalu hai");
});

app.post("/create", createNotesController);

module.exports = app;
