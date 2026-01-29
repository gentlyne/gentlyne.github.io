import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import './LanguageToggle.css';

export const LanguageToggle: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`language-toggle__button ${language === 'ru' ? 'language-toggle__button--active' : ''}`}
        onClick={() => changeLanguage('ru')}
        disabled={language === 'ru'}
      >
        RU
      </button>

      <button
        className={`language-toggle__button ${language === 'en' ? 'language-toggle__button--active' : ''}`}
        onClick={() => changeLanguage('en')}
        disabled={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};
