import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../features/auth/authSlice';
import React from 'react';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = useAppSelector((s) => s.auth.token);

  const [role, setRole] = useState<'user' | 'admin'>('user');

  const handleLogin = () => {
    dispatch(login(role));
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div>
      <h1>Авторизация</h1>

      <div>
        <label>
          <input type="radio" value="user" checked={role === 'user'} onChange={() => setRole('user')} />
          Пользователь
        </label>

        <label>
          <input type="radio" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} />
          Админ
        </label>
      </div>

      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};
