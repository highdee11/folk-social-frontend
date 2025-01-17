import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StorageConst, ThemeConst } from "../../core/data/const";

const initialState = {
    mode: localStorage.getItem(StorageConst.THEME) || ThemeConst.LIGHT
}

const ThemeSlice = createSlice({
    name: 'ThemeSlice',
    initialState,
    reducers: {
        setMode(state, action: PayloadAction<string>){
            state.mode = action.payload
            localStorage.setItem(StorageConst.THEME, action.payload);
        }
    }
})

export const ThemeSliceActions = ThemeSlice.actions;
export default ThemeSlice;