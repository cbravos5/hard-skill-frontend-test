import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContext } from "./contexts/Auth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
