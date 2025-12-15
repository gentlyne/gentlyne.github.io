import React from 'react';
import './header.css';
import { Logo } from '../logo/logo';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
    </header>
  );
};
