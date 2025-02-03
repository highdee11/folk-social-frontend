import { useDispatch, useSelector } from "react-redux";
import ApiService from "../../services/ApiService";
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface";
import { Paginated, Post } from "../../interfaces/ModelInterface";
import { RootState } from "../../../store";
import { PostSliceActions } from "../../../store/slices/PostSlice";

const usePosts = ()=> {

    const apiService = new ApiService()
    const dispatch = useDispatch()

    const loadingFollowed = useSelector((state: RootState)=> state.posts.isLoadingFollowedPosts)
    const followedPosts = useSelector((state: RootState)=> state.posts.followedPosts)
    

    const getFollowedPost = async ()=> {
        try{
            dispatch(PostSliceActions.toggleLoadingFollowedPost(true))
            const result: DefaultRequestResponse<Paginated<Post>> = await apiService.get("/api/post/followed")
            dispatch(PostSliceActions.setFollowedPost(result.data?.content))
        }finally {
            dispatch(PostSliceActions.toggleLoadingFollowedPost(false))
        }
    }

    return {
        followedPosts,
        loadingFollowed,
        getFollowedPost
    }
}


export default usePosts;