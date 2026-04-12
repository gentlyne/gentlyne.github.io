import React, { useState } from 'react';
import { ServerErrors } from 'src/entities/auth';
import { useSignUpMutation } from 'src/features/auth/authApi';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | null>(null);

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    try {
      const result = await signUp({
        email,
        password,
        commandId: 'my-team-1',
      }).unwrap();

      console.log('token', result.token);
    } catch (err: any) {
      const serverError = err?.data as ServerErrors;

      if (serverError?.errors?.length) {
        setError(serverError.errors[0].message);
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>

      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Регистрация'}
      </button>
    </form>
  );
};
