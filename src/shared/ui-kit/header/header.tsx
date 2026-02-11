import React, { memo, ReactNode } from 'react';
import styles from './header.module.scss';

interface HeaderProps {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
  children?: ReactNode;
}

/**
 * Layout Component
 * Использует Slot Pattern для гибкости размещения элементов
 */
export const Header = memo(({ leftSlot, rightSlot, className = '', children }: HeaderProps) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.header__left}>{leftSlot}</div>
      {children && <div className={styles.header__center}>{children}</div>}
      <div className={styles.header__right}>{rightSlot}</div>
    </header>
  );
});
Header.displayName = 'Header';
