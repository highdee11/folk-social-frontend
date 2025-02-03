import { createSlice } from "@reduxjs/toolkit";
import { PostSliceInterface } from "../../core/interfaces/SliceStateInterface";
import { useRef } from "react";

const initialState: PostSliceInterface = {
    followedPosts: [],
    forYouPosts: [],
    currentPostIndex: 0,
    isLoadingFollowedPosts: false,
    isLoadingForYouPosts: false,
}

export const PostSlice = createSlice({
    name: "post_slice",
    initialState,
    reducers:  {
        setFollowedPost:(state, action)=> {
            state.followedPosts.push(...action.payload)
        },
        setForYouPost:(state, action)=> {
            state.forYouPosts.push(...action.payload)
        },
        toggleLoadingFollowedPost: (state, action)=> {
            state.isLoadingFollowedPosts = action.payload
        },
        toggleLoadingForYouPost: (state, action)=> {
            state.isLoadingForYouPosts = action.payload
        },
        setCurrentPostIndex: (state, action)=> {
            state.currentPostIndex = action.payload
        }
    }
})
 
export const PostSliceActions = PostSlice.actions;