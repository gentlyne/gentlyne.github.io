import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Operation } from 'src/entities/operation/types';

interface OperationsState {
  list: Operation[];
}

const initialState: OperationsState = {
  list: [],
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setOperations(state, action: PayloadAction<Operation[]>) {
      state.list = action.payload;
    },

    addOperation(state, action: PayloadAction<Operation>) {
      state.list.push(action.payload);
    },

    updateOperation(state, action: PayloadAction<Operation>) {
      const index = state.list.findIndex((o) => o.title === action.payload.title);

      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    removeOperation(state, action: PayloadAction<string>) {
      state.list = state.list.filter((o) => o.title !== action.payload);
    },
  },
});

export const { setOperations, addOperation, updateOperation, removeOperation } = operationsSlice.actions;

export default operationsSlice.reducer;
