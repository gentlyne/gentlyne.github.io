import React from 'react';
import { Theme } from '../../../app/theme/ThemeContext';
import './ThemeToggle.css';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const root: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333333',
    color: theme === 'light' ? '#333333' : '#f0f0f0',
  };

  return (
    <div style={root}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
};
