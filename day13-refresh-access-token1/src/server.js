import app from "./app/app.js";
import { connectToDb } from "./config/db.js";

await connectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
