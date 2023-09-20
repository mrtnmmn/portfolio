import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./resources/locales/en.json')
      },
      es: {
        translation: require('./resources/locales/es.json')
      },
      gal: {
        translation: require('./resources/locales/gal.json')
      }
    },
    fallbackling: 'en',
    debug: true, 
    interpolation: {
      escapeValue: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
