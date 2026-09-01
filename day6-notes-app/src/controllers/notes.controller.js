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

const getSingleNotesController = async (req, res) => {
  try {
    let noteID = req.params.id;

    let note = await notesModel.findById(noteID);

    res.status(200).json({
      message: "Note fetched succesfully",
      data: note,
    });
    
  } catch (error) {
    console.log("errors in single note api", error);
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
};
