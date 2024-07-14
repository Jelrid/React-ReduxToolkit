import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filialSlice = createSlice({
  name: 'filial',
  initialState,
  reducers: {
    setFilials: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilials } = filialSlice.actions;

export default filialSlice.reducer;