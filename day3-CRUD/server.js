const express = require("express");

let app = express();

let users = [];

app.use(express.json());

//create
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send("Users saved succesfullly");
});

//Get - Read
app.get("/", (req, res) => {
  res.send(users);
});
//update
app.put("/update/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  let updatedUser = users.map((val) =>
    val.id === id ? { ...val, name } : val,
  );
  res.send(updatedUser);
});

//delete
app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let usersdata = users.filter((val) => val.id !== id);
  console.log(usersdata);
  users = usersdata;
  res.send(usersdata);
});

app.listen(3000, () => {
  console.log("server is working");
});
