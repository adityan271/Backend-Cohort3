//Api ke logics hold krta hai
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
    return res.status(500).json({
      message: "Internal server error",
    });
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
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getSingleNotesController = async (req, res) => {
  try {
    let noteID = req.params.id;

    let note = await notesModel.findById(noteID);

    res.status(200).json({
      message: "Note fetched succesfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const updateNotesController = async (req, res) => {
  try {
    let nodeId = req.params.id;
    let body = req.body;

    let updatedNote = await notesModel.findByIdAndUpdate(noteID, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Note updated succesfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updateNotesController,
};
