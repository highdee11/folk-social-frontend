import React, { useRef } from "react"
import { Post, Tag } from "../../core/interfaces/ModelInterface"
import ProfileIcon from "../shared/ProfileIcon";
import { Navigate, useNavigate } from "react-router-dom";
import { routes } from "../../core/data/route";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SinglePostItem: React.FC<{post: Post}> = ({post})=> {

    const navigate = useNavigate();
    const mediaSize = post.media.length;
    const subMedia = post.media.slice(0, Math.min(3, mediaSize))
    const subText = post.content.length > 200? post.content.substring(0, 200)+ "...": post.content;
 
    
    const openPost = ()=> {
        navigate(routes.viewPost.replace(":id", post.id.toString())) 
    }

    return (
        <div className="w-[500px] h-[95%] post_box mx-auto dark:bg-darkFaintGray bg-[#F9F9F9] rounded-[8px] pt-3">
            <div className="flex flex-col justify-between h-full">
                 {/* Header */}
                <div className="flex justify-between items-start pb-3 px-4">

                    <div className="flex gap-3">
                        <div className="w-[40px] h-[40px] rounded-full">
                            <ProfileIcon textSizeClass="1.2em" user={post.author} />
                        </div>
                        <div>
                            <p className=" text-darkColor dark:text-gray-200 OnestMedium">{post.author.firstname} {post.author.lastname}</p>
                            <p className=" text-grayText text-xs OnestLight dark:text-gray-400"> {post.since}</p>
                        </div>
                    </div>

                    {/* <div className=" cursor-pointer">
                        <span className="text-grayText dark:text-gray-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div> */}
                </div>
                
                <div className="h-full flex flex-col justify-between">

                    {/* Images */}
                    <div className="h-full relative">
                        {
                            subMedia.length > 0 ? (<div className={`absolute h-full inset-0 bg-[url('https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=2048x2048&w=is&k=20&c=jbXMS_yFujUo29EIjPd8XBsEan-PAHUcPs0Zo1-HY_U=')] bg-cover bg-center`}></div>): ""
                        }
                        <div className={`absolute flex backdrop-blur-md items-center bg-black/20 gap-2 h-full`}>
                            <Carousel 
                                showThumbs={false}
                            >
                                {subMedia.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`block h-fit`}>
                                        <img
                                            src={image.url}
                                            alt={`Post ${index + 1}`}
                                            className="w-full  object-cover"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    <div className="px-4 ">
                         {/* Body */}
                        {
                            post.content && post.content.length > 0 ? (
                                <div className="py-4">
                                    <p className="text-darkColor overflow-y-clip text-sm dark:text-gray-200 OnestRegular">
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
                <div className="px-5 py-5 h-[100px]">
                    <div className="flex dark:bg-darkColor bg-lightFaintGray rounded-full m-auto justify-between gap-5 py-4 px-5">
                        <div className="flex gap-5 ">
                            <div>
                                <div className="flex hover:cursor-pointer justify-center items-center gap-2">
                                    <span className="text-grayText dark:text-gray-200">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.9393 12.4131H15.9483" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.9304 12.4131H11.9394" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.9214 12.4131H7.9304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">
                                        { post.statistics.comment_count.data.count }
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex hover:cursor-pointer justify-center items-center  gap-2">
                                    <span className="text-grayText dark:text-gray-200">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">
                                        { post.statistics.post_likes.data.count }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex hover:cursor-pointer justify-center items-center gap-2">
                                <span className="text-grayText dark:text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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