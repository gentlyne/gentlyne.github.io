import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'src/entities/Profile';
import { fakeLogin } from './fakeAuth';

const TOKEN_KEY = 'app_token';
const PROFILE_KEY = 'app_profile';

interface AuthState {
  token: string | null;
  profile: Profile | null;
}

const initialState: AuthState = {
  token: localStorage.getItem(TOKEN_KEY),
  profile: JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null'),
};

export const login = createAsyncThunk('auth/login', async (role: 'admin' | 'user') => {
  const data = await fakeLogin(role);
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.profile = null;
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(PROFILE_KEY);
    },

    syncToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;

      if (!action.payload) {
        state.profile = null;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;

      localStorage.setItem(TOKEN_KEY, action.payload.token);

      // создаём фейковый профиль
      const profile = {
        id: '1',
        name: 'John Doe',
        email: 'john@mail.com',
        role: action.payload.role,
      };
      state.profile = profile;
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    });
  },
});

export const { logout, syncToken } = authSlice.actions;
export default authSlice.reducer;
