const mongoose = require("mongoose");

const noteSchema = new mongoose.model({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: 10,
  },
});

const NotesModel = Mongoose.model("notes", "noteSchema");
module.exports = NotesModel;
