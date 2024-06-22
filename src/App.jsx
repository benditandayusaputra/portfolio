import { ThemeProvider } from "./ThemeContext";
import { RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
