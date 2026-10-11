import "./App.css";
import { RouterProvider } from "react-router";
import router from "./App.routes";
import { AuthProvider } from "../modules/auth/context/useAuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
