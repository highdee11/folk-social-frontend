import { Link, Outlet, useLocation } from 'react-router-dom';
import Avatar from '../../assets/images/highdee.ai.jpeg';
const Profile = () => {
    const activeClass = "text-primary border-b-2 border-primary";
    const location = useLocation();

    return (
        <>
            <div className=" relative lg:w-auto w-[98%] mx-auto bg-darkColor mt-12 rounded-[12px] py-8 md:px-8 px-2 flex justify-between items-center gap-5 shadow-sm profileBg">

                <div className=" flex justify-start items-center gap-6">

                    <div className=" md:w-[190px] sm:w-[110px] w-[80px] md:h-[190px] sm:h-[110px] h-[80px] bg-[#B190B6]  rounded-full">
                        <img src={Avatar} className=' rounded-full h-full w-full' />
                    </div>

                    <div>
                        <p className=' text-white OnestSemiBold text-xl'>
                            highdee.ai
                        </p>

                        <div className=' mt-3'>
                            <ul className="flex flex-wrap sm:gap-4 gap-2">
                                <li>
                                    <p className=" text-base flex justify-start items-center gap-1">
                                        <span className=' text-white OnestMedium'>2563</span>
                                        <span className=' text-white text-sm'>Following</span>
                                    </p>
                                </li>
                                <li>
                                    <p className=" text-base  flex justify-start items-center gap-1">
                                        <span className=' text-white OnestMedium'>2563</span>
                                        <span className=' text-white text-sm'>Followers</span>
                                    </p>
                                </li>
                                <li>
                                    <p className=" text-base  flex justify-start items-center gap-1">
                                        <span className=' text-white OnestMedium'>661</span>
                                        <span className=' text-white text-sm'>Likes</span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <p className=' text-white mt-2'>
                            Software Engineer 🇳🇬
                        </p>
                    </div>
                </div>

                <div className=' sm:block hidden'>
                    <button className="px-5 py-2 bg-white rounded-[8px]  text-darkColor text-nowrap">
                        Edit Profile
                    </button>
                </div>
            </div>


            <div className=' mt-8 lg:w-auto w-[98%] mx-auto'>
                <div className='w-full border-b'>
                    <ul className="flex flex-wrap -mb-px w-fit mr-auto">
                        <li className="me-2">
                            <Link
                                to="videos"
                                className={`inline-block sm:px-12 px-5 pb-2 text-grayText dark:text-white  border-b-2 ${location.pathname.endsWith("/videos") ? activeClass : "border-transparent"
                                    }   rounded-t-lg `}>
                                Videos
                            </Link>
                        </li>
                        <li className="me-2">
                            <Link
                                to="reposts"
                                className={`inline-block sm:px-12 px-5 pb-2 text-grayText dark:text-white ${location.pathname.endsWith("/reposts") ? activeClass : "border-transparent"
                                    }  rounded-t-lg`}>
                                Reposts
                            </Link>
                        </li>
                        <li className="me-2">
                            <Link
                                to="liked"
                                className={`inline-block sm:px-12 px-5 pb-2 text-grayText dark:text-white ${location.pathname.endsWith("/liked") ? activeClass : "border-transparent"
                                    }  rounded-t-lg`}>
                                Liked
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='w-full pt-4'>
                    <Outlet />
                </div>
            </div>
        </>

    );
}

export default Profile;