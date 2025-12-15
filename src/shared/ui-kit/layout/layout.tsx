import React from 'react';
import './layout.css';
import { Header } from '../header/header';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
    </div>
  );
};
