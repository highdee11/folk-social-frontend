import React, {  } from "react"
import { Post, Tag } from "../../core/interfaces/ModelInterface"
import ProfileIcon from "../shared/ProfileIcon";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../core/data/route";
import PostMediaWrapper from "./PostMediaWrapper";
import PostLikeButton from "./PostLikeButton";
import PostCommentButton from "./PostCommentButton";

const SinglePostItem: React.FC<{post: Post}> = ({post})=> {

    const navigate = useNavigate();
    const subText = post.content.length > 200? post.content.substring(0, 200)+ "...": post.content;
 
    
    const openPost = ()=> {
        navigate(routes.viewPost.replace(":id", post.id.toString())) 
    }

    return (
        <div className="w-full sm:w-[500px] h-full mx-auto content-center">
            <div className="flex flex-col justify-between sm:py-3 h-full sm:max-h-[850px] dark:bg-darkFaintGray bg-[#F9F9F9] sm:rounded-[8px]">

                 {/* Header */}
                <div className="hidden sm:flex justify-between items-start pb-3 px-4">

                    <Link to={routes.profile.replace(":username", post.author.username)} className="flex gap-3">
                        <div className="w-[40px] h-[40px] rounded-full">
                            <ProfileIcon textSizeClass="1.2em" user={post.author} />
                        </div>
                        <div>
                            <p className=" text-darkColor dark:text-gray-200 OnestMedium">{post.author.firstname} {post.author.lastname}</p>
                            <p className=" text-grayText text-xs OnestLight dark:text-gray-400"> {post.since}</p>
                        </div>
                    </Link>

                    {/* <div className=" cursor-pointer">
                        <span className="text-grayText dark:text-gray-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div> */}
                </div>
                
                <div className="h-full flex flex-col">

                    {/* Media */}
                    <PostMediaWrapper post={post}/>

                    <div className="px-4 ">
                         {/* Body */}
                        {
                            post.content && post.content.length > 0 ? (
                                <div className="py-4">
                                    <p className="text-darkColor max:h-[100px] overflow-y-clip text-sm dark:text-gray-200 OnestRegular">
                                        {subText}
                                    </p>
                                </div>
                            ):""
                        }
                        {
                            post.tags && post.tags.length > 0 ? (
                                post.tags.map((tag: Tag)=> 
                                    <span className="text-grayText capitalize text-sm mr-1 dark:text-gray-400"
                                    key={`tags-${post.id}-${tag.name}`}>#{tag.name}</span>
                                )
                            ):""
                        } 
                    </div>
                </div>

                {/* Footer */}
                <div className="px-5 mb-2">
                    <div className="flex dark:bg-darkColor bg-lightFaintGray rounded-full m-auto justify-between gap-5 mt-3 py-4 px-5">
                        <div className="flex gap-5 ">
                            <div>
                                <PostCommentButton id={post.id} stat={post.statistics.comment_count} />
                            </div>

                            <div>
                                <PostLikeButton 
                                    id={post.id}
                                    stat={post.statistics.post_likes}
                                    like={post.hasLiked}
                                    />
                            </div>
                        </div>

                        <div>
                            <div className="flex hover:cursor-pointer justify-center items-center gap-2">
                                <span className="">
                                    <svg className="text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePostItem