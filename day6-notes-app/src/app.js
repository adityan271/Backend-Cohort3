const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Ok chalu hai")
})

module.exports = app;
