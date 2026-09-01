const express = require("express");
const createNotesController = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController)

module.exports = router;
