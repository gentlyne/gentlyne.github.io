import React from 'react';
import './header.css';
import { Logo } from '../logo/logo';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header-controls">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};
