import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import React from 'react';

export const ProtectedRoute = ({ children }: any) => {
  const token = useAppSelector((s) => s.auth.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
