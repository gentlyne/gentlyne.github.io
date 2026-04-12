import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProfilePage } from 'src/pages/profile/ProfilePage';
import { OperationsPage } from 'src/pages/operations/OperationsPage';
import { AppLayout } from 'src/widgets/layout/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from 'src/pages/auth/LoginPage';
import { RegisterForm } from 'src/features/forms/RegisterForm';
import { RegisterFormThunk } from 'src/features/forms/RegisterForm/RegisterFormThunk';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup-toolkit" element={<RegisterForm />} />
          <Route path="/signup-thunk" element={<RegisterFormThunk />} />
          <Route path="/" element={<OperationsPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
