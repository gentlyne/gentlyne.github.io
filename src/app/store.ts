import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import appReducer from '../features/app/appSlice';
import operationsReducer from '../features/operations/operationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    operations: operationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
