const express = require("express")
const { create } = require("../controllers/user.controller")
const upload = require("../config/multer.config")

const router = express.Router()

router.post("/create", upload.array("images"), create)

module.exports = router