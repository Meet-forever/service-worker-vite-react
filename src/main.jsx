import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(
    import.meta.env.MODE === "production"
      ? "/service-worker.js"
      : "/dev-sw.js?dev-sw"
  , {scope: "/"})
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
