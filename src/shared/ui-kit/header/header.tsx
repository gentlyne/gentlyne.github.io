import React from 'react';
import './header.css';
import { Logo } from '../logo/logo';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { ThemeProvider, useTheme } from '../../../app/theme/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <Logo />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};
