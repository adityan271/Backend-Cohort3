// sari main functionality hold krta hai
const express = require("express");
const cors = require('cors')
const connectDb = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

//cors integrated
app.use(cors({
  origin:"http://localhost:5173"
}))

connectDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok chalu hai");
});

app.use("/notes", notesRoute);

module.exports = app;
