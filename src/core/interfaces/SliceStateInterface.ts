import { MutableRefObject } from "react";
import { ThemeConst } from "../data/const";
import { Post, User, UserPreference } from "./ModelInterface";

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

export interface PostSliceInterface {
    followedPosts: Post[],
    forYouPosts: Post[],
    currentPostIndex: number,
    isLoadingFollowedPosts: boolean,
    isLoadingForYouPosts: boolean,
}