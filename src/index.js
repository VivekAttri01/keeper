import React from "react";
import ReactDOM from "react-dom/client"; // Use this import for React 18+
import App from "./components/App";

// Create the root element for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
