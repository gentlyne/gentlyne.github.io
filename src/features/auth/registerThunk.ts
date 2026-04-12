import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResult, ServerErrors, SignUpBody } from 'src/entities/auth';

const BASE_URL = 'http://19429ba06ff2.vps.myjino.ru/api';

export const register = createAsyncThunk<AuthResult, SignUpBody, { rejectValue: ServerErrors }>(
  'auth/register',
  async (body, { rejectWithValue }) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data);
    }

    return data;
  }
);
