const { default: mongoose } = require("mongoose");

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

module.exports = connectDb;