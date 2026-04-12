import React from 'react';
import { Header } from 'src/shared/ui-kit/Header/Header';

import { Logo } from 'src/shared/ui-kit/logo/logo';
import { LanguageToggle } from 'src/shared/ui-kit/LanguageToggle/LanguageToggle';
import { ThemeToggle } from 'src/shared/ui-kit/ThemeToggle/ThemeToggle';

import { UserMenu } from 'src/widgets/UserMenu/UserMenu';
import { useAppSelector } from 'src/hooks';
import { AuthMenu } from '../authMenu/AuthMenu';

export const AppHeader = () => {
  const token = useAppSelector((state) => state.auth.token);
  return (
    <Header
      leftSlot={<Logo />}
      rightSlot={
        <>
          <LanguageToggle />
          <ThemeToggle />
          {!token ? <AuthMenu /> : <UserMenu />}
        </>
      }
    />
  );
};
