const express = require("express");
const userRoutes = require("./routes/user.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Ok the api is runing");
});

app.use("/user", userRoutes);

module.exports = app;
