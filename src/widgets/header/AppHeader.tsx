import React from 'react';
import { Header } from 'src/shared/ui-kit/Header/Header';

import { Logo } from 'src/shared/ui-kit/logo/logo';
import { LanguageToggle } from 'src/shared/ui-kit/LanguageToggle/LanguageToggle';
import { ThemeToggle } from 'src/shared/ui-kit/ThemeToggle/ThemeToggle';
import { useAppDispatch } from 'src/hooks';
import { logout } from 'src/features/auth/authSlice';

export const AppHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <Header
      leftSlot={<Logo />}
      rightSlot={
        <>
          <LanguageToggle />
          <ThemeToggle />
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      }
    />
  );
};
