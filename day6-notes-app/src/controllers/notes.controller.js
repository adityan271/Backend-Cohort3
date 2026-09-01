const notesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await notesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error in api", error);
  }

  res.send("Ok chalu hai");
};
const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await notesModel.find();

    res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in notes api", error);
  }
};

module.exports = { createNotesController, getAllNotesController };
