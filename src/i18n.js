import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./assets/lng/en/translation.json";
import vi from "./assets/lng/vi/translation.json";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    debug: true,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
