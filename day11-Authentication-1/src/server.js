import app from "./app/app.js";
import { connecteDb } from "./config/db.js";

await connecteDb();

app.listen(3000, () => {
  console.log("Server is running");
});
