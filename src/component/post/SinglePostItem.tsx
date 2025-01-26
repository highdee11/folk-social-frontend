import React from "react"
import { Post } from "../../core/interfaces/ModelInterface"
import ProfileIcon from "../shared/ProfileIcon";

const SinglePostItem: React.FC<{post: Post}> = ({post})=> {

    const mediaSize = post.media.length;
    const subMedia = post.media.slice(0, Math.min(3, mediaSize))

    const subText = post.content.length > 200? post.content.substring(0, 200)+ "...": post.content;

    return (
            <div className=" w-[500px] post_box mx-auto dark:bg-darkFaintGray bg-[#F9F9F9] rounded-[8px] pt-3">

                {/* Header */}
                <div className=" flex justify-between items-start pb-3 px-4">

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
                {/* Images */}
                <div className=" sm:h-[320px] h-[220px]">
                    <div
                        className={`grid gap-2 h-full ${
                            subMedia.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                        }`}
                    >
                        {subMedia.map((image, index) => (
                            <div
                                key={index}
                                className={`relative block h-full ${
                                        subMedia.length >= 3 && index === 0
                                        ? 'col-span-1 row-span-2'
                                        : ''
                                }`}>
                                <img
                                    src={image.url}
                                    alt={`Post ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {
                                    index == 2 && mediaSize > 3? (
                                        <div className="absolute bg-black bg-opacity-50 text-center content-center top-0 bottom-0 left-0 right-0">
                                            <span className="text-white font-semibold text-3xl">
                                                
                                                + {mediaSize - subMedia.length}
                                            </span>
                                        </div>
                                    ):''
                                }
                            </div>
                        ))}
                    </div>
                </div>

                {/* Body */}
                {
                    post.content && post.content.length > 0 ? (
                        <div className="px-4 py-4">
                            <p className="text-darkColor max-h-[80px] overflow-y-clip text-sm dark:text-gray-200 OnestRegular">
                                {subText}
                            </p>
                        </div>
                    ): <div className=""></div>
                }

                {/* Footer */}
                <div id="icons">
                    <ul className="flex justify-between py-5 px-12">

                        <li>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-grayText dark:text-gray-200">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.9393 12.4131H15.9483" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9304 12.4131H11.9394" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.9214 12.4131H7.9304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">1k</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex justify-center items-center  gap-2">
                                <span className="text-grayText dark:text-gray-200">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">200</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-grayText dark:text-gray-200">
                                    <svg width="24" height="24" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8253 9.74543C18.5939 9.51529 18.2175 9.51529 17.9854 9.74543L16.2263 11.4892V3.44592C16.2263 1.82156 14.8928 0.500393 13.255 0.500393H8.61969C8.29165 0.500393 8.02542 0.764312 8.02542 1.0895C8.02542 1.41469 8.29165 1.6786 8.61969 1.6786H13.255C14.2375 1.6786 15.0378 2.47193 15.0378 3.44592V11.4892L13.2788 9.74543C13.0466 9.51529 12.6702 9.51529 12.4389 9.74543C12.2075 9.97557 12.2059 10.3487 12.4389 10.578L15.2121 13.3272C15.327 13.4427 15.4791 13.5 15.6321 13.5C15.785 13.5 15.9355 13.4434 16.052 13.3272L18.8253 10.578C19.0582 10.3487 19.0582 9.97557 18.8253 9.74543V9.74543ZM10.3787 12.3218H5.74342C4.7609 12.3218 3.96061 11.5285 3.96061 10.5545V2.51121L5.71965 4.25496C5.83692 4.37043 5.98905 4.42777 6.14119 4.42777C6.29332 4.42777 6.44545 4.37043 6.56114 4.25496C6.7933 4.02482 6.7933 3.65172 6.56114 3.42236L3.78788 0.673197C3.55572 0.442268 3.17934 0.442268 2.94798 0.673197L0.174715 3.42236C-0.0582385 3.65172 -0.0582385 4.02482 0.174715 4.25496C0.407669 4.48511 0.782456 4.48511 1.01462 4.25496L2.77366 2.51121V10.5545C2.77366 12.1788 4.1072 13.5 5.74501 13.5H10.3803C10.7083 13.5 10.9746 13.2361 10.9746 12.9109C10.9746 12.5857 10.7076 12.3218 10.3803 12.3218H10.3787Z" fill="currentColor" />
                                    </svg>
                                </span>
                                <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">20</p>
                            </div>
                        </li>

                        <li>
                            <span className="text-grayText dark:text-gray-200">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.37145 10.2017V17.0618" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.0382 6.91895V17.0617" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.6285 13.8267V17.0617" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
                </div>
    );
}

export default SinglePostItem