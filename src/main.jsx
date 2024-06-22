import React from "react";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);
