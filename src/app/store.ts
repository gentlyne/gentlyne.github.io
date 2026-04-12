import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import authThunkReducer from '../features/auth/authSliceThunk';
import appReducer from '../features/app/appSlice';
import operationsReducer from '../features/operations/operationsSlice';
import { authApi } from 'src/features/auth/authApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authThunk: authThunkReducer,
    app: appReducer,
    operations: operationsReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
