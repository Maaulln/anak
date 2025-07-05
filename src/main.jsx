// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './styles/tailwind.css';
import { BrowserRouter } from "react-router-dom";
import Survey from "./pages/Survey.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App   />
    </BrowserRouter>
  </React.StrictMode>
);