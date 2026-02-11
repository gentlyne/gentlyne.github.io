import React, { ReactNode, forwardRef } from 'react';
import './layout.css';
import { Header } from '../Header/Header';

interface LayoutProps {
  children?: ReactNode;
  headerSlot?: ReactNode; // Slot для кастомного Header
  footerSlot?: ReactNode; // Slot для Footer
  className?: string;
}

/**
 * Layout Component
 * Использует Slot Pattern для гибкости Header/Footer
 * ForwardRef позволяет получить ref на основной контейнер
 */
export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, headerSlot, footerSlot, className = '' }, ref) => {
    return (
      <div className={`layout ${className}`} ref={ref}>
        {/* Header Slot: если передан, используем его, иначе дефолтный Header */}
        {headerSlot || <Header />}

        <main className="layout-content">{children}</main>

        {/* Footer Slot: можно добавить кастомный футер */}
        {footerSlot && <footer className="layout-footer">{footerSlot}</footer>}
      </div>
    );
  }
);

Layout.displayName = 'Layout';
