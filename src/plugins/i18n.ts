import { createI18n } from "vue-i18n";
import { languages } from "./index";

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: messages,
});

export default i18n;
