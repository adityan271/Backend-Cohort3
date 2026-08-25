const express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.send("Ok got it")
})

app.listen(3000, () => {
    console.log("server is running");
})
