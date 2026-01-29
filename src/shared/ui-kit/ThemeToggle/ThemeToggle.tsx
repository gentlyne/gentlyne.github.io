import React from 'react';
import './ThemeToggle.css';
import { useTheme } from '../../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '🌙 ' + t('theme.dark') : '☀️ ' + t('theme.light')}
    </button>
  );
};
