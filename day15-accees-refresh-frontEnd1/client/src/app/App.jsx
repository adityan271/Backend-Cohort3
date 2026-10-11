import routes from "./app.routes";
import { RouterProvider } from "react-router";
import { UserProvider } from "../context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  );
}

export default App;
