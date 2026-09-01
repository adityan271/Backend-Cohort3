const express = require("express");
const { createNotesController, getAllNotesController } = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController)
router.get("/allNotes", getAllNotesController)

module.exports = router;
