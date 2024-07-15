import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filialReducer from '../features/Home/filialSlice'
import activeMenuReducer from '../features/Home/activeMenuSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filial: filialReducer,
    activeMenu: activeMenuReducer
  },
});
