// features handle krta hai
const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
} = require("../controllers/notes.controller");

const notesModel = require("../models/notes.model");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/allNotes", getAllNotesController);
router.get("/:id", getSingleNotesController);

module.exports = router;
