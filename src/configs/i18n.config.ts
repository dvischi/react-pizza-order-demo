import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocales from "@/locales/en.json"
import deLocales from "@/locales/de.json"


const resources = {
  en: enLocales,
  de: deLocales
};

i18n
  .use(initReactI18next)
  .init({
    //debug: true,
    defaultNS: "translation",
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
  