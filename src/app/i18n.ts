import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: 'My App',
      },
      theme: {
        light: 'Light',
        dark: 'Dark',
      },
    },
  },
  ru: {
    translation: {
      header: {
        title: 'Моё приложение',
      },
      theme: {
        light: 'Светлая',
        dark: 'Темная',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
