import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';

interface ProtectedLayoutProps {
  children: JSX.Element;
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
};
