import { createSlice } from "@reduxjs/toolkit";
import { PostSliceInterface } from "../../core/interfaces/SliceStateInterface";

const initialState: PostSliceInterface = {
    followedPosts: [],
    forYouPosts: [],
    isLoadingFollowedPosts: false,
    isLoadingForYouPosts: false
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
    }
})
 
export const PostSliceActions = PostSlice.actions;