import { ThemeConst } from "../data/const";
import { User, UserPreference } from "./ModelInterface";

export interface AuthSliceInterface {
    auth_token: string|null,
    user: User|null
}


export interface ThemeSliceInterface {
    mode: 'light'|'dark'
}

export interface ProfileSliceInterface {
    preference: UserPreference|null
}