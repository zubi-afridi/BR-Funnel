import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { antdTheme } from "./theme/antdTheme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={antdTheme}
      button={{ className: "my-button", variant: "solid" }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
