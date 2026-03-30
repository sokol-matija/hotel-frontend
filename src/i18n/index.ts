import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import en from "./locales/en.json"
import hr from "./locales/hr.json"
import de from "./locales/de.json"

const resources = {
  en: { translation: en },
  hr: { translation: hr },
  de: { translation: de },
}

const isServer = typeof window === "undefined"

const instance = isServer ? i18n.use(initReactI18next) : i18n.use(LanguageDetector).use(initReactI18next)

instance.init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: { escapeValue: false },
  ...(isServer
    ? {}
    : {
        detection: {
          order: ["localStorage", "htmlTag"],
          caches: ["localStorage"],
        },
      }),
})

export default i18n
