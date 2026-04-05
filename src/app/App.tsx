import React, { useEffect } from 'react';
import { AppRouter } from 'src/app/router/AppRouter';
import { syncToken } from 'src/features/auth/authSlice';
import { useAppDispatch } from 'src/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const listener = () => {
      const token = localStorage.getItem('app_token');
      dispatch(syncToken(token));
    };

    window.addEventListener('storage', listener);

    return () => window.removeEventListener('storage', listener);
  });
  return <AppRouter />;
}

export default App;
