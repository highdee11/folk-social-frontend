import React, { useEffect } from "react"
import usePosts from "../../core/hooks/post/usePosts"
import PostSkeletonItem from "../PostSkeletonItem"
import EmptyContent from "../shared/EmptyContent"
import { routes } from "../../core/data/route"
import { Link, Navigate } from "react-router-dom"
import { Post } from "../../core/interfaces/ModelInterface"
import SinglePostItem from "./SinglePostItem"

const FollowedPosts:React.FC<{}> = ()=> {

    const {loadingFollowed, followedPosts, getFollowedPost } = usePosts()
    

    useEffect(()=> {
        if(followedPosts.length == 0){
            getFollowedPost()
        }
    }, [])
    

    return (
        <ul className="space-y-5 w-full h-full py-5">

            {
                loadingFollowed ? (
                    <li className="w-full">
                        <PostSkeletonItem />
                    </li>
                ):
                followedPosts.length == 0? (
                    <EmptyContent 
                        title='No Post Available'
                        message='Consider following top creators to get better recommendations from your friends.'>
                        <Link to={routes.UserSuggestions} className='text-sm text-primary underline'>See Suggested Friends</Link>
                    </EmptyContent>
                ):
                
                (
                    followedPosts.map((post:Post)=> (
                        <li key={post.id} className="w-full h-full hover:cursor-pointer">
                            <SinglePostItem post={post} />
                        </li>
                    ))
                )
            }
        </ul>
    )
}

export default FollowedPosts