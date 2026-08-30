const express = require("express");
//mongoose
const mongoose = require("mongoose");

const app = express();

//mongoose - connection
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adityanath271_db_user:coho@cohort-cluster.fhlabqb.mongodb.net/",
    );

    console.log("MongoDb connected");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

connectDb();

app.get("/", (req, res) => {
  res.send("Ok i'm chalu");
});


module.exports =  app;