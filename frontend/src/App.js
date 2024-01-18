import styles from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
  return (
    <div className={styles.root_div}>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
