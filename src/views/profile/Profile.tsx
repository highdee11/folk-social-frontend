import { Link, Outlet, useSearchParams } from 'react-router-dom';
import Avatar from '../../assets/images/highdee.ai.jpeg';
const Profile = () => {
    const [searchParams] = useSearchParams();
    const activeClass = "text-primary border-b-2 border-primary";
    const feed = searchParams.get('feed');

    return (
        <>
            <div className=" relative lg:w-auto w-[98%] mx-auto bg-darkColor dark:bg-white mt-12 rounded-[12px] py-5 px-8 flex justify-between items-center shadow-sm profileBg">

                <div className=" flex justify-start items-center gap-6">

                    <div className=" w-[190px] h-[190px] bg-[#B190B6]  rounded-full">
                        <img src={Avatar} className=' rounded-full' />
                    </div>

                    <div>
                        <p className=' text-white dark:text-darkColor OnestSemiBold text-xl'>
                            highdee.ai
                        </p>

                        <div className=' mt-3'>
                            <ul className="flex gap-4">
                                <li>
                                    <p className=" text-base flex justify-start items-center gap-1">
                                        <span className='dark:text-darkColor text-white OnestMedium'>2563</span>
                                        <span className='dark:text-darkColor text-white text-sm'>Following</span>
                                    </p>
                                </li>
                                <li>
                                    <p className=" text-base  flex justify-start items-center gap-1">
                                        <span className='dark:text-darkColor text-white OnestMedium'>2563</span>
                                        <span className='dark:text-darkColor text-white text-sm'>Followers</span>
                                    </p>
                                </li>
                                <li>
                                    <p className=" text-base  flex justify-start items-center gap-1">
                                        <span className='dark:text-darkColor text-white OnestMedium'>661</span>
                                        <span className='dark:text-darkColor text-white text-sm'>Likes</span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <p className=' text-white dark:text-darkColor mt-2'>
                            Software Engineer 🇳🇬
                        </p>
                    </div>
                </div>

                <div>
                    <button className="px-5 py-2 bg-white dark:bg-darkColor rounded-[8px]  text-darkColor">
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className=' mt-8'>
                <div className='w-full border-b'>
                    <ul className="flex flex-wrap -mb-px w-fit mr-auto">
                        <li className="me-2">
                            <Link
                                to="?feed=videos"
                                className={`inline-block px-12 pb-2 border-b-2 ${feed == 'videos' && activeClass || 'border-transparent'}  rounded-t-lg `}>
                                Videos
                            </Link>
                        </li>
                        <li className="me-2">
                            <Link
                                to="?feed=repost"
                                className={`inline-block px-12 pb-2 ${feed == 'repost' && activeClass || 'border-transparent'} rounded-t-lg`}>
                                Reposts
                            </Link>
                        </li>
                        <li className="me-2">
                            <Link
                                to="?feed=liked"
                                className={`inline-block px-12 pb-2 ${feed == 'liked' && activeClass || 'border-transparent'} rounded-t-lg`}>
                                Liked
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='w-full pt-12'>
                    <Outlet />
                </div>
            </div>
        </>

    );
}

export default Profile;