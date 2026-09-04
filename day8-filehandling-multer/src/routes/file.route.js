const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    res.status(200).json({
      message: "file recieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server errror",
    });
  }
});

module.exports = router;
