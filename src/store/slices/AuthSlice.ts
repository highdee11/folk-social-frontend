import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { AuthSliceInterface } from "../../core/interfaces/SliceStateInterface";
import { User } from "../../core/interfaces/ModelInterface";
import {StorageConst} from "../../core/data/const";
import AuthService from "../../core/services/AuthService";

const initState: AuthSliceInterface = {
    auth_token: localStorage.getItem(StorageConst.AUTH_TOKEN) || null,
    user: null
}

export const AuthSlice =  createSlice({
    name: "AuthSlice",
    initialState : initState,
    reducers: {
        setAuthToken(state, action: PayloadAction<string>) {
            state.auth_token = action.payload; 
            localStorage.setItem(StorageConst.AUTH_TOKEN, action.payload)
        },
        setUser(state, action: PayloadAction<User|null>) {
            state.user = action.payload
        },
        signout(state){
            state.auth_token = null;
            state.user = null;

            //
            AuthService.logout();
        }
    }
})

export const AuthSliceAction = AuthSlice.actions;
export default AuthSlice;