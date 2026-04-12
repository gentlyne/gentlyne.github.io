import React, { useState } from 'react';
import { register } from 'src/features/auth/registerThunk';
import { useAppDispatch, useAppSelector } from 'src/hooks';

export const RegisterFormThunk = () => {
  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((s) => s.authThunk);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      register({
        email,
        password,
        commandId: 'my-team-1',
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация (Thunk)</h2>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button disabled={loading}>{loading ? 'Loading...' : 'Регистрация'}</button>
    </form>
  );
};
