import { initThemeMode } from "flowbite-react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App.jsx";
import "./i18n.js";
import "./index.css";
import i18n from "./i18n.js";

// Set initial title
document.title = i18n.t("document_title");

// Update title when language changes
i18n.on("languageChanged", (lng) => {
  document.title = i18n.t("document_title");
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

createRoot(document.getElementById("root")).render(
  <I18nextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
);

initThemeMode();
