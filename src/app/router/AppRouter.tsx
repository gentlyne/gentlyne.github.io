import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from 'src/pages/auth/SignInPage';
import { SignUpPage } from 'src/pages/auth/SignUpPage';
import { ProfilePage } from 'src/pages/profile/ProfilePage';
import { OperationsPage } from 'src/pages/operations/OperationsPage';
import { ProtectedRoute } from './ProtectedRoute';
import { AppLayout } from 'src/widgets/layout/AppLayout';
import { CategoriesPage } from 'src/pages/categories/CategoriesPage';
import { ChangePasswordPage } from 'src/pages/auth/ChangePasswordPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<OperationsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/changePassword"
            element={
              <ProtectedRoute>
                <ChangePasswordPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
