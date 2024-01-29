// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/locales/en";
import id from "../../public/locales/id";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
