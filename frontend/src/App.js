import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  );
}

export default App;
