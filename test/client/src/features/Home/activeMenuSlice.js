import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const activeMenuSlice = createSlice({
    name: 'activeMenu',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            return action.payload;
        }
    }
});

export const {setActiveMenu} = activeMenuSlice.actions;

export default activeMenuSlice.reducer;