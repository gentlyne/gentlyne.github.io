import { createSlice } from '@reduxjs/toolkit';
import { register } from './registerThunk';

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'authThunk',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;

        localStorage.setItem('token', action.payload.token);
      })

      .addCase(register.rejected, (state, action) => {
        state.loading = false;

        if (action.payload?.errors?.length) {
          state.error = action.payload.errors[0].message;
        } else {
          state.error = 'Ошибка регистрации';
        }
      });
  },
});

export default authSlice.reducer;
