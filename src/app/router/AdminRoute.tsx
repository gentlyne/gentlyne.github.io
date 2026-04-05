import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import React from 'react';

export const AdminRoute = ({ children }: any) => {
  const profile = useAppSelector((s) => s.auth.profile);

  if (!profile || profile.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};
