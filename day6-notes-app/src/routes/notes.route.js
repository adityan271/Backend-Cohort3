// features handle krta hai
const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updateNotesController,
} = require("../controllers/notes.controller");

const notesModel = require("../models/notes.model");

const router = express.Router();


// Create
router.post("/create", createNotesController);

// Read
router.get("/allNotes", getAllNotesController);

// Read One
router.get("/:id", getSingleNotesController);

// Update
router.put("/:id", updateNotesController);


module.exports = router;
