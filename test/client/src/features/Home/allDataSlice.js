import { createSlice } from '@reduxjs/toolkit';
const initialState =[] 
const allDataSlice = createSlice({
  name: 'allData',
  initialState,
  reducers: {
    setAllData: (state, action) => {
      return action.payload
    }
  }
})
export const { setAllData} = allDataSlice.actions;
export default allDataSlice.reducer;