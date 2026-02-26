import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../app/i18n';

export const I18nWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);
