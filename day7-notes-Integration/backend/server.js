// server run krna iska kaam hai
require("dotenv").config();

const app = require("./src/app");
let port = process.env.port || 4000;

app.listen(3000, () => {
  console.log("ok working");
});
