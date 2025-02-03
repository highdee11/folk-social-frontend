import React, { ReactEventHandler, Ref, RefObject, useEffect, useRef, useState } from "react"
import usePosts from "../../core/hooks/post/usePosts"
import PostSkeletonItem from "../skeletons/PostSkeletonItem"
import EmptyContent from "../shared/EmptyContent"
import { routes } from "../../core/data/route"
import { Link } from "react-router-dom"
import { Post } from "../../core/interfaces/ModelInterface"
import SinglePostItem from "./SinglePostItem"

const FollowedPosts:React.FC = ()=> {
 
    const {loadingFollowed, 
        currentPostIndex,
        followedPosts, 
        getFollowedPost,
        moveToNextPost,
        moveToPrevPost } = usePosts()
    
    const postRefs = useRef<(HTMLLIElement | null)[]>([])
    const [hasScrolled, setHasScrolled] = useState(false)
    
    useEffect(()=> {

        if(followedPosts.length == 0){
            getFollowedPost()
        } 
    
        // Disable default scroll
        document.getElementById('postList')?.addEventListener("wheel", (event) => {
            event.preventDefault();
        }, {passive: false});
        
    }, [])
    
    useEffect(()=> { 

        if(postRefs.current[currentPostIndex]){
            let ref:HTMLLIElement =  postRefs.current[currentPostIndex]
            ref.scrollIntoView({ behavior: !hasScrolled? "instant" : "smooth", block: "center" })    
        }

        // Helps the list to jump to currentPostIndex at first load.
        // Helps to avoid scrolling all the way to currentPostIndex when page resumes
        setHasScrolled(true)

        // Listen to Keyup then scroll page
        window.addEventListener("keyup", keyPressHandler)

        return ()=> {
            // Remove listener to avoid multiple triggers of Keypresshandler
            window.removeEventListener("keyup", keyPressHandler)
        }

    }, [currentPostIndex])

    const keyPressHandler = (e: KeyboardEvent)=> { 
        if(e.key == 'ArrowUp'){
            moveToPrevPost()
        }else if(e.key == 'ArrowDown'){
            moveToNextPost()
        }else{
            e.preventDefault()
        }
    }

    return (
        <div className="w-full h-full  flex justify-center">
            <ul id="postList" className=" space-y-3 w-full h-full relative overflow-scroll">

                {
                    loadingFollowed ? (
                        <li className="w-full h-full">
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
                        followedPosts.map((post:Post, index)=> (
                            <li ref={(el)=> (postRefs.current[index] = el)} key={post.id} 
                                className=" w-full h-full ">
                                <SinglePostItem post={post} />
                            </li>
                        ))
                    )
                }
            </ul>
            <div className="hidden md:block lg:block content-center">
                <div 
                    onClick={moveToPrevPost} 
                    className="arrow hover:scale-110 hover:cursor-pointer rotate-180">
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.248"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g></svg>
                </div>
                <div onClick={moveToNextPost} className="arrow hover:scale-110 hover:cursor-pointer ">
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.248"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g></svg>
                </div>
            </div>
        </div>
    )
}

export default FollowedPosts