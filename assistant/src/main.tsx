import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StartupPointProvider } from "./context/StartupPoints.tsx";

ReactDOM.createRoot(document.getElementById("groom-assistant")!).render(
  <React.StrictMode>
    <StartupPointProvider>
      <App />
    </StartupPointProvider>
  </React.StrictMode>,
);
