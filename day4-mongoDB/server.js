const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Ok i'm chalu")
})


app.listen(3000, () => {
  console.log("Server is working");
});
