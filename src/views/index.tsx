import ProfileBg from '../assets/images/MaskGroupBg.png';
import ChatBG from '../assets/images/chatBg.png';
import { initFlowbite } from "flowbite";
import Avatar from '../assets/images/avatar1.png';
import AvatarTwo from '../assets/images/avatar2.png';
import AvatarThree from '../assets/images/avatar3.png';
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        initFlowbite();
    })

    return (
        <div >
            <div className=" h-auto pb-6 lg:w-[calc(100%-360px)] w-full lg:mx-0 mx-auto bg-white dark:bg-darkColor lg:rounded-[8px] rounded-none shadow-md fixed dark:border dark:border-grayText">
                <div className=" lg:h-[180px] h-[120px] w-full">
                    <img src={ProfileBg} className=" w-full h-full object-cover lg:rounded-t-[8px] rounded-none" />
                </div>

                <div className=" flex justify-between items-center lg:px-12 px-2">
                    <div>
                        <div className="flex justify-start items-end gap-3">
                            <div className="md:w-[100px] w-[70px]  md:h-[100px] h-[70px] border-2 border-white rounded-full -mt-10">
                                <img src={Avatar} className=" w-full h-full object-cover rounded-full" />
                            </div>
                            <div >
                                <p className=" text-darkColor dark:text-white OnestMedium text-xl">John Doe</p>
                                <p className=" text-grayText dark:text-white  OnestLight"> Industry</p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex justify-end items-center sm:gap-8 gap-3">
                        <div className=" flex justify-end items-center gap-2">
                            <span className="text-grayText dark:text-white" >
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1L5.57 11.72C5.50379 11.8083 5.41764 11.8797 5.31858 11.9284C5.21952 11.977 5.11036 12.0016 5 12C4.89242 11.9997 4.78627 11.9753 4.68936 11.9286C4.59245 11.8818 4.50724 11.814 4.44 11.73L0 6.07L1.36 5L5 9.72L12.68 0L14 1Z" fill="currentColor" />
                                </svg>
                            </span>
                            <p className=" text-grayText dark:text-white  OnestLight text-sm">
                                Following
                            </p>
                        </div>

                        <span className="text-grayText dark:text-white cursor-pointer">
                            <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0V0C3.10457 0 4 0.895431 4 2V2C4 3.10457 3.10457 4 2 4V4C0.895431 4 0 3.10457 0 2V2ZM8 2C8 0.895431 8.89543 0 10 0V0C11.1046 0 12 0.895431 12 2V2C12 3.10457 11.1046 4 10 4V4C8.89543 4 8 3.10457 8 2V2ZM20 2C20 0.895431 19.1046 0 18 0V0C16.8954 0 16 0.895431 16 2V2C16 3.10457 16.8954 4 18 4V4C19.1046 4 20 3.10457 20 2V2Z" fill="currentColor" />
                            </svg>
                        </span>
                    </div>

                </div>


                <div className=" mt-4 flex lg:flex-row flex-col justify-between items-center ml-auto px-5">
                    <div className="md:w-auto w-full">
                        <ul className=" flex flex-wrap md:justify-start justify-between items-center  md:gap-2 gap-4 md:space-x-9 space-x-0">
                            <li>
                                <div className="flex gap-1">
                                    <span className="text-grayText dark:text-white" >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className="text-grayText dark:text-white OnestLight text-sm">
                                        City, Country
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex gap-1">
                                    <span className="text-grayText dark:text-white">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.8877 10.8967C19.2827 10.7007 20.3567 9.50473 20.3597 8.05573C20.3597 6.62773 19.3187 5.44373 17.9537 5.21973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.7285 14.2505C21.0795 14.4525 22.0225 14.9255 22.0225 15.9005C22.0225 16.5715 21.5785 17.0075 20.8605 17.2815" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8867 14.6641C8.67273 14.6641 5.92773 15.1511 5.92773 17.0961C5.92773 19.0401 8.65573 19.5411 11.8867 19.5411C15.1007 19.5411 17.8447 19.0591 17.8447 17.1131C17.8447 15.1671 15.1177 14.6641 11.8867 14.6641Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8867 11.888C13.9957 11.888 15.7057 10.179 15.7057 8.069C15.7057 5.96 13.9957 4.25 11.8867 4.25C9.77766 4.25 8.06766 5.96 8.06766 8.069C8.05966 10.171 9.75666 11.881 11.8587 11.888H11.8867Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.88472 10.8967C4.48872 10.7007 3.41572 9.50473 3.41272 8.05573C3.41272 6.62773 4.45372 5.44373 5.81872 5.21973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.04388 14.2505C2.69288 14.4525 1.74988 14.9255 1.74988 15.9005C1.74988 16.5715 2.19388 17.0075 2.91188 17.2815" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className="text-grayText dark:text-white  OnestLight text-sm">
                                        60 following
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="flex gap-1">
                                    <span className="text-grayText dark:text-white">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.8877 10.8967C19.2827 10.7007 20.3567 9.50473 20.3597 8.05573C20.3597 6.62773 19.3187 5.44373 17.9537 5.21973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.7285 14.2505C21.0795 14.4525 22.0225 14.9255 22.0225 15.9005C22.0225 16.5715 21.5785 17.0075 20.8605 17.2815" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8867 14.6641C8.67273 14.6641 5.92773 15.1511 5.92773 17.0961C5.92773 19.0401 8.65573 19.5411 11.8867 19.5411C15.1007 19.5411 17.8447 19.0591 17.8447 17.1131C17.8447 15.1671 15.1177 14.6641 11.8867 14.6641Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8867 11.888C13.9957 11.888 15.7057 10.179 15.7057 8.069C15.7057 5.96 13.9957 4.25 11.8867 4.25C9.77766 4.25 8.06766 5.96 8.06766 8.069C8.05966 10.171 9.75666 11.881 11.8587 11.888H11.8867Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.88472 10.8967C4.48872 10.7007 3.41572 9.50473 3.41272 8.05573C3.41272 6.62773 4.45372 5.44373 5.81872 5.21973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.04388 14.2505C2.69288 14.4525 1.74988 14.9255 1.74988 15.9005C1.74988 16.5715 2.19388 17.0075 2.91188 17.2815" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className="text-grayText dark:text-white  OnestLight text-sm">
                                        120 followers
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className=" flex justify-end items-center gap-5 lg:mt-0 mt-4">
                        <ul className="flex">
                            <li className="-ml-4">
                                <div className="bg-darkColor dark:bg-white h-[35px] w-[35px] rounded-full">

                                </div>
                            </li>
                            <li className="-ml-4">
                                <div className="bg-darkColor dark:bg-white h-[35px] w-[35px] rounded-full">

                                </div>
                            </li>
                            <li className="-ml-4">
                                <div className="bg-darkColor dark:bg-white  h-[35px] w-[35px] rounded-full">

                                </div>
                            </li>
                        </ul>
                        <p className=" text-grayText dark:text-white  text-base OnestLight">
                            Followed by Joe, Soap, and 9 others you follow
                        </p>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center md:pt-[330px] pt-[300px] relative gap-4 lg:w-auto w-[98%] lg:mx-0 mx-auto">
                <div id="posts" className=" pb-72 h-[800px] overflow-y-scroll">

                    <ul className=" space-y-5 w-full flex justify-between items-start flex-col">

                        <li className="w-full">
                            <div className=" w-[638px] post_box mx-auto bg-white dark:bg-darkColor dark:border dark:border-grayText rounded-[8px] shadow-md pt-5">

                                <div className=" flex justify-between items-start pb-2 px-4">

                                    <div className="flex gap-3">
                                        <div className="w-[54px] min-w-[54px] h-[54px] rounded-full border">
                                            <img src={Avatar} />
                                        </div>
                                        <div>
                                            <p className=" text-darkColor dark:text-white OnestMedium">John Doe</p>
                                            <p className=" text-grayText OnestLigh dark:text-white"> 623 followers</p>
                                            <p className=" text-grayText OnestLight dark:text-white"> 2w</p>
                                        </div>
                                    </div>

                                    <div className=" cursor-pointer">
                                        <span className="text-grayText dark:text-white">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <p className=" text-darkColor dark:text-white text-base OnestRegular">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                                    </p>
                                </div>

                                <div className=" sm:h-[320px] h-[220px] mt-4">
                                    <img src={ChatBG} className=" h-full w-full" alt="paintImg" />
                                </div>

                                <div id="icons">
                                    <ul className="flex justify-between py-5 px-12">

                                        <li>
                                            <div className="flex justify-center items-center gap-2">
                                                <span className="text-grayText dark:text-white">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.9393 12.4131H15.9483" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.9304 12.4131H11.9394" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M7.9214 12.4131H7.9304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <p className=" OnestMedium text-base dark:text-white text-darkColor">1k</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex justify-center items-center  gap-2">
                                                <span className="text-grayText dark:text-white">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <p className=" OnestMedium text-base dark:text-white text-darkColor">200</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex justify-center items-center gap-2">
                                                <span className="text-grayText dark:text-white">
                                                    <svg width="24" height="24" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.8253 9.74543C18.5939 9.51529 18.2175 9.51529 17.9854 9.74543L16.2263 11.4892V3.44592C16.2263 1.82156 14.8928 0.500393 13.255 0.500393H8.61969C8.29165 0.500393 8.02542 0.764312 8.02542 1.0895C8.02542 1.41469 8.29165 1.6786 8.61969 1.6786H13.255C14.2375 1.6786 15.0378 2.47193 15.0378 3.44592V11.4892L13.2788 9.74543C13.0466 9.51529 12.6702 9.51529 12.4389 9.74543C12.2075 9.97557 12.2059 10.3487 12.4389 10.578L15.2121 13.3272C15.327 13.4427 15.4791 13.5 15.6321 13.5C15.785 13.5 15.9355 13.4434 16.052 13.3272L18.8253 10.578C19.0582 10.3487 19.0582 9.97557 18.8253 9.74543V9.74543ZM10.3787 12.3218H5.74342C4.7609 12.3218 3.96061 11.5285 3.96061 10.5545V2.51121L5.71965 4.25496C5.83692 4.37043 5.98905 4.42777 6.14119 4.42777C6.29332 4.42777 6.44545 4.37043 6.56114 4.25496C6.7933 4.02482 6.7933 3.65172 6.56114 3.42236L3.78788 0.673197C3.55572 0.442268 3.17934 0.442268 2.94798 0.673197L0.174715 3.42236C-0.0582385 3.65172 -0.0582385 4.02482 0.174715 4.25496C0.407669 4.48511 0.782456 4.48511 1.01462 4.25496L2.77366 2.51121V10.5545C2.77366 12.1788 4.1072 13.5 5.74501 13.5H10.3803C10.7083 13.5 10.9746 13.2361 10.9746 12.9109C10.9746 12.5857 10.7076 12.3218 10.3803 12.3218H10.3787Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <p className=" OnestMedium text-base dark:text-white text-darkColor">20</p>
                                            </div>
                                        </li>

                                        <li>
                                            <span className="text-grayText dark:text-white">
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
                        </li>

                        <li className="w-full">
                            <div className=" w-[638px] post_box mx-auto bg-white dark:bg-darkColor dark:border dark:border-grayText rounded-[8px] shadow-md pt-5">

                                <div className=" flex justify-between items-start pb-2 px-4">

                                    <div className="flex gap-3">
                                        <div className="w-[54px] min-w-[54px] h-[54px] rounded-full border">
                                            <img src={Avatar} />
                                        </div>
                                        <div>
                                            <p className=" text-darkColor dark:text-white OnestMedium">John Doe</p>
                                            <p className=" text-grayText OnestLigh dark:text-white"> 623 followers</p>
                                            <p className=" text-grayText OnestLight dark:text-white"> 2w</p>
                                        </div>
                                    </div>

                                    <div className=" cursor-pointer">
                                        <span className="text-grayText dark:text-white">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 8.5L12 15.5L5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <p className=" text-darkColor dark:text-white text-base OnestRegular">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.
                                    </p>
                                </div>

                                <div className=" sm:h-[320px] h-[220px] mt-4">
                                    <img src={ChatBG} className=" h-full w-full" alt="paintImg" />
                                </div>

                                <div id="icons">
                                    <ul className="flex justify-between py-5 px-12">

                                        <li>
                                            <div className="flex justify-center items-center gap-2">
                                                <span className="text-grayText dark:text-white">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.9393 12.4131H15.9483" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.9304 12.4131H11.9394" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M7.9214 12.4131H7.9304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <p className=" OnestMedium text-base dark:text-white text-darkColor">1k</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex justify-center items-center  gap-2">
                                                <span className="text-grayText dark:text-white">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <p className=" OnestMedium text-base dark:text-white text-darkColor">200</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="flex justify-center items-center gap-2">
                                                <span className="text-grayText dark:text-white">
                                                    <svg width="24" height="24" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.8253 9.74543C18.5939 9.51529 18.2175 9.51529 17.9854 9.74543L16.2263 11.4892V3.44592C16.2263 1.82156 14.8928 0.500393 13.255 0.500393H8.61969C8.29165 0.500393 8.02542 0.764312 8.02542 1.0895C8.02542 1.41469 8.29165 1.6786 8.61969 1.6786H13.255C14.2375 1.6786 15.0378 2.47193 15.0378 3.44592V11.4892L13.2788 9.74543C13.0466 9.51529 12.6702 9.51529 12.4389 9.74543C12.2075 9.97557 12.2059 10.3487 12.4389 10.578L15.2121 13.3272C15.327 13.4427 15.4791 13.5 15.6321 13.5C15.785 13.5 15.9355 13.4434 16.052 13.3272L18.8253 10.578C19.0582 10.3487 19.0582 9.97557 18.8253 9.74543V9.74543ZM10.3787 12.3218H5.74342C4.7609 12.3218 3.96061 11.5285 3.96061 10.5545V2.51121L5.71965 4.25496C5.83692 4.37043 5.98905 4.42777 6.14119 4.42777C6.29332 4.42777 6.44545 4.37043 6.56114 4.25496C6.7933 4.02482 6.7933 3.65172 6.56114 3.42236L3.78788 0.673197C3.55572 0.442268 3.17934 0.442268 2.94798 0.673197L0.174715 3.42236C-0.0582385 3.65172 -0.0582385 4.02482 0.174715 4.25496C0.407669 4.48511 0.782456 4.48511 1.01462 4.25496L2.77366 2.51121V10.5545C2.77366 12.1788 4.1072 13.5 5.74501 13.5H10.3803C10.7083 13.5 10.9746 13.2361 10.9746 12.9109C10.9746 12.5857 10.7076 12.3218 10.3803 12.3218H10.3787Z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <p className=" OnestMedium text-base dark:text-white text-darkColor">20</p>
                                            </div>
                                        </li>

                                        <li>
                                            <span className="text-grayText dark:text-white">
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
                        </li>

                    </ul>

                </div>





                <div className=" w-[350px] min-w-[350px] mini_post h-fit bg-white dark:bg-darkColor dark:border dark:border-grayText  rounded-[8px] px-5 py-8 md:block hidden">
                    <p className=" OnestRegular text-lg pb-6 text-darkColor dark:text-white">
                        Who to follow
                    </p>
                    <ul className="space-y-7">

                        <li>
                            <div className=" flex justify-between items-center border-b-[0.5px] border-b-[rgba(16,16,16,0.24)] dark:border-b-grayText pb-3">
                                <div className="flex gap-3">
                                    <div className="w-[49px] h-[49px] rounded-full">
                                        <img src={Avatar} />
                                    </div>
                                    <div>
                                        <p className=" text-darkColor dark:text-white OnestMedium">John Doe</p>
                                        <p className=" text-grayText dark:text-white OnestLight"> Industry</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <span className="text-darkColor dark:text-white">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.8279 13.7849H13.9999V16.6089C13.9999 17.0229 13.6639 17.3589 13.2499 17.3589C12.8359 17.3589 12.4999 17.0229 12.4999 16.6089V13.7849H9.67194C9.25794 13.7849 8.92194 13.4489 8.92194 13.0349C8.92194 12.6209 9.25794 12.2849 9.67194 12.2849H12.4999V9.46085C12.4999 9.04685 12.8359 8.71085 13.2499 8.71085C13.6639 8.71085 13.9999 9.04685 13.9999 9.46085V12.2849H16.8279C17.2419 12.2849 17.5779 12.6209 17.5779 13.0349C17.5779 13.4489 17.2419 13.7849 16.8279 13.7849ZM13.2499 2.79785C5.69094 2.79785 3.01294 5.47585 3.01294 13.0349C3.01294 20.5939 5.69094 23.2719 13.2499 23.2719C20.8079 23.2719 23.4869 20.5939 23.4869 13.0349C23.4869 5.47585 20.8079 2.79785 13.2499 2.79785Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <p className="text-base text-darkColor dark:text-white OnestRegular">Follow</p>
                                </div>


                            </div>
                        </li>

                        <li>
                            <div className=" flex justify-between items-center border-b-[0.5px] border-b-[rgba(16,16,16,0.24)] dark:border-b-grayText pb-3">
                                <div className="flex gap-3">
                                    <div className="w-[49px] h-[49px] rounded-full">
                                        <img src={AvatarTwo} />
                                    </div>
                                    <div>
                                        <p className=" text-darkColor dark:text-white OnestMedium">John Doe</p>
                                        <p className=" text-grayText dark:text-white OnestLight"> Industry</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <span className="text-darkColor dark:text-white">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.8279 13.7849H13.9999V16.6089C13.9999 17.0229 13.6639 17.3589 13.2499 17.3589C12.8359 17.3589 12.4999 17.0229 12.4999 16.6089V13.7849H9.67194C9.25794 13.7849 8.92194 13.4489 8.92194 13.0349C8.92194 12.6209 9.25794 12.2849 9.67194 12.2849H12.4999V9.46085C12.4999 9.04685 12.8359 8.71085 13.2499 8.71085C13.6639 8.71085 13.9999 9.04685 13.9999 9.46085V12.2849H16.8279C17.2419 12.2849 17.5779 12.6209 17.5779 13.0349C17.5779 13.4489 17.2419 13.7849 16.8279 13.7849ZM13.2499 2.79785C5.69094 2.79785 3.01294 5.47585 3.01294 13.0349C3.01294 20.5939 5.69094 23.2719 13.2499 23.2719C20.8079 23.2719 23.4869 20.5939 23.4869 13.0349C23.4869 5.47585 20.8079 2.79785 13.2499 2.79785Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <p className="text-base text-darkColor dark:text-white OnestRegular">Follow</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className=" flex justify-between items-center pb-2">
                                <div className="flex gap-3">
                                    <div className="w-[49px] h-[49px] rounded-full">
                                        <img src={AvatarThree} />
                                    </div>
                                    <div>
                                        <p className=" text-darkColor dark:text-white OnestMedium">John Doe</p>
                                        <p className=" text-grayText dark:text-white OnestLight"> Industry</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <span className="text-darkColor dark:text-white">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.8279 13.7849H13.9999V16.6089C13.9999 17.0229 13.6639 17.3589 13.2499 17.3589C12.8359 17.3589 12.4999 17.0229 12.4999 16.6089V13.7849H9.67194C9.25794 13.7849 8.92194 13.4489 8.92194 13.0349C8.92194 12.6209 9.25794 12.2849 9.67194 12.2849H12.4999V9.46085C12.4999 9.04685 12.8359 8.71085 13.2499 8.71085C13.6639 8.71085 13.9999 9.04685 13.9999 9.46085V12.2849H16.8279C17.2419 12.2849 17.5779 12.6209 17.5779 13.0349C17.5779 13.4489 17.2419 13.7849 16.8279 13.7849ZM13.2499 2.79785C5.69094 2.79785 3.01294 5.47585 3.01294 13.0349C3.01294 20.5939 5.69094 23.2719 13.2499 23.2719C20.8079 23.2719 23.4869 20.5939 23.4869 13.0349C23.4869 5.47585 20.8079 2.79785 13.2499 2.79785Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    <p className="text-base text-darkColor dark:text-white OnestRegular">Follow</p>
                                </div>


                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    );
}

export default Home;