import { createSlice } from "@reduxjs/toolkit";
import { UserPreference } from "../../core/interfaces/ModelInterface";
import { ProfileSliceInterface } from "../../core/interfaces/SliceStateInterface";

const initialState: ProfileSliceInterface = {
    preference: null
}

export const ProfileSlice = createSlice({
    name: "profileSlice",
    initialState,
    reducers: {
        setPreference(state, action){
            state.preference = action.payload;
        }
    }
})
export const ProfileSliceAction  = ProfileSlice.actions