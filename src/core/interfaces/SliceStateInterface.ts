import { ThemeConst } from "../data/const";
import { User } from "./ModelInterface";

export interface AuthSliceInterface {
    auth_token: string|null,
    user: User|null
}


export interface ThemeSliceInterface {
    mode: 'light'|'dark'
}