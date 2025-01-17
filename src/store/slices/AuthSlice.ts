import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { AuthSliceInterface } from "../../core/interfaces/SliceStateInterface";
import { User } from "../../core/interfaces/ModelInterface";
import AppConst from "../../core/data/const";

const initState: AuthSliceInterface = {
    auth_token: localStorage.getItem(AppConst.AUTH_TOKEN) || null,
    user: null
}

export const AuthSlice =  createSlice({
    name: "AuthSlice",
    initialState : initState,
    reducers: {
        setAuthToken(state, action: PayloadAction<string|null>) {
            state.auth_token = action.payload;
        },
        setUser(state, action: PayloadAction<User|null>) {
            state.user = action.payload
        },
        signout(state){
            state.auth_token = null;
            state.user = null;

            //
            localStorage.removeItem(AppConst.AUTH_TOKEN)
        }
    }
})

export const AuthSliceAction = AuthSlice.actions;
export default AuthSlice;