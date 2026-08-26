const express = require("express");

let app = express();

let users = [];

app.use(express.json());

//create
app.post("/create", (req, res) => {
    let body = req.body;
    users.push(body);
    res.send("users saved ");
});

//Get - Read
app.get("/", (req, res) => {
    res.send(users);
});

app.listen(3000, () => {
    console.log("server is working");
});
