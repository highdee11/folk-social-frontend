import { useDispatch, useSelector } from "react-redux";
import ApiService from "../../services/ApiService";
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface";
import { Paginated, Post } from "../../interfaces/ModelInterface";
import { RootState } from "../../../store";
import { PostSliceActions } from "../../../store/slices/PostSlice";
import React, { Ref, RefObject, useRef, useState } from "react";

const usePosts = ()=> {

    const apiService = new ApiService()
    const dispatch = useDispatch()

    const loadingFollowed = useSelector((state: RootState)=> state.posts.isLoadingFollowedPosts)
    const followedPosts = useSelector((state: RootState)=> state.posts.followedPosts)
    const currentPostIndex = useSelector((state: RootState)=> state.posts.currentPostIndex)
    
    
    const moveToNextPost = ()=> {
        if(currentPostIndex == followedPosts.length - 1) return;
        dispatch(PostSliceActions.setCurrentPostIndex(currentPostIndex+1))
    }

    const moveToPrevPost = ()=> {
        if(currentPostIndex == 0) return;
        dispatch(PostSliceActions.setCurrentPostIndex(currentPostIndex-1))
    }

    const getFollowedPost = async ()=> {
        try{
            dispatch(PostSliceActions.toggleLoadingFollowedPost(true))
            const result: DefaultRequestResponse<Paginated<Post>> = await apiService.get("/api/post/followed")

            let posts:Post[] = result.data?.content ?? []
            dispatch(PostSliceActions.setFollowedPost(posts))
        }finally {
            dispatch(PostSliceActions.toggleLoadingFollowedPost(false))
        }
    }

    return {
        followedPosts,
        loadingFollowed,
        currentPostIndex,
        getFollowedPost,
        moveToNextPost,
        moveToPrevPost
    }
}


export default usePosts;