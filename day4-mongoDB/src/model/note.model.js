const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    minlenght: 10,
  },
});

const notesModel = mongoose.model("notes", notesSchema);
module.exports = notesModel;
