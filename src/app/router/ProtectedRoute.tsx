import { Navigate } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useAppSelector } from '../hooks';

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};
