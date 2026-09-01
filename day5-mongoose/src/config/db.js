const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adityanath271_db_user:cohort123456@cohort-cluster.fhlabqb.mongodb.net/",
    );
    console.log("Mongo db connected");
  } catch (error) {
    console.log("error in db", error);
  }
};

module.exports = connectDb;
