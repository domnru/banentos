import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background min-h-screen">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);
