import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Certificates from "./pages/Certificates.jsx";
import ErrorPage from "./error-pages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  },
]);

export default router;
