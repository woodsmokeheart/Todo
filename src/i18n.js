import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const translationEn = {
  "Your Todo": "Your Todo",
  "Write your first task": "Write your first task",
  "Add task...": "Add task...",
  Create: "Create",
  All: "All",
  Completed: "Completed",
  uncompleted: "Uncompleted",
};
const translationRu = {
  "Your Todo": "Твой список дел",
  "Write your first task": "Создай свою первую задачу",
  "Add task...": "Добавить задачу...",
  Create: "Создать",
  All: "Все",
  Completed: "Завершено",
  Uncompleted: "Незавершено",
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: translationEn,
      },
      ru: {
        translation: translationRu,
      },
    },
  });

export default i18n;
