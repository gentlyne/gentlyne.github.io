import React from 'react';
import './logo.css';
import { useTranslation } from 'react-i18next';

export const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <div className="logo-mark" />
      <span className="logo-text">{t('header.title')}</span>
    </div>
  );
};
