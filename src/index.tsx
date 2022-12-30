import React from "react";
import { createRoot } from "react-dom/client";
import { Director } from "hitchcock";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Director>
      <App />
    </Director>
  </React.StrictMode>,
);
