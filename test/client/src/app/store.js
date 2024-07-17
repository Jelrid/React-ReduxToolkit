import { configureStore } from '@reduxjs/toolkit';
import filialReducer from '../features/Home/filialSlice'
import activeMenuReducer from '../features/Home/activeMenuSlice';
import allDataReducer from '../features/Home/allDataSlice';
export const store = configureStore({
  reducer: {
    filial: filialReducer,
    allData: allDataReducer,
    activeMenu: activeMenuReducer
  },
});
