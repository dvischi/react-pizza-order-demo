import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // default namespace
    },
    home: {
      "header": "Home",
    },
    order: {
      "header": "Order",
      "deal": "!Today's Deal!",
      "delivery": "I would like to pick up the pizza myself and save ${{discount}}.",
      "delivery_self_pick_up": "The pizza is waiting for you!",
      "order": "Order Pizza For ${{total}}",
    },
  },
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
  