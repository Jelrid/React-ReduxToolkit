import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filialReducer from '../features/Home/filialSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filial: filialReducer,
  },
});
