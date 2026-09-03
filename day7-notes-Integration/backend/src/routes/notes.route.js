// features handle krta hai
const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updateNotesController,
  deleteNotesController,
  singleEntityUpdateController,
} = require("../controllers/notes.controller");

const router = express.Router();

// Create
router.post("/create", createNotesController);

// Read
router.get("/allNotes", getAllNotesController);

// Read One
router.get("/:id", getSingleNotesController);

// Update via put
router.put("/:id", updateNotesController);

// Update via patch
router.patch("/:id/single", singleEntityUpdateController);

// Delete
router.delete("/:id", deleteNotesController);

module.exports = router;
