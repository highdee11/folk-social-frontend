import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Avatar from '../../assets/images/highdee.ai.jpeg';
import { User } from '../../core/interfaces/ModelInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import useProfile from '../../core/hooks/user/useProfile';
import { useEffect } from 'react';

const Profile = () => {

    const activeClass = "text-primary border-b-2 border-primary";
    const location = useLocation();
    const params = useParams()
    const { profile, profileStat, getProfile, getProfileStat } = useProfile() 

    useEffect(()=> {
        if(params.username){
            getProfile(params.username)
        }
    }, [])

    useEffect(()=> {
        if(profile){
            getProfileStat(profile?.id)
        }
    }, [profile])
 
    return (
        <>
            <div className=" relative lg:w-auto w-[98%] mx-auto bg-darkColor mt-12 rounded-[12px] py-8 md:px-8 px-2 flex justify-between items-center gap-5 shadow-sm profileBg">

                <div className=" flex justify-start items-center gap-6">

                    <div className=" md:w-[190px] sm:w-[110px] w-[80px] md:h-[190px] sm:h-[110px] h-[80px] bg-[#B190B6]  rounded-full">
                        <img src={Avatar} className=' rounded-full h-full w-full' />
                    </div>

                    <div>
                        <p className=' text-white OnestSemiBold text-xl'> { profile?.username } </p>

                        <div className=' mt-3'>
                            <ul className="flex flex-wrap sm:gap-4 gap-2">
                                <li>
                                    <p className=" text-base flex justify-start items-center gap-1">
                                        <span className=' text-white OnestMedium'>{profileStat?.following}</span>
                                        <span className=' text-white text-sm'>Following</span>
                                    </p>
                                </li>
                                <li>
                                    <p className=" text-base  flex justify-start items-center gap-1">
                                        <span className=' text-white OnestMedium'>{profileStat?.followers}</span>
                                        <span className=' text-white text-sm'>Followers</span>
                                    </p>
                                </li>
                                <li>
                                    <p className=" text-base  flex justify-start items-center gap-1">
                                        <span className=' text-white OnestMedium'>{profileStat?.postCount}</span>
                                        <span className=' text-white text-sm'>Posts</span>
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className=' sm:block hidden mt-5'>
                            <button className="px-5 py-2 bg-white rounded-[8px]  text-darkColor text-nowrap">
                                Edit Profile
                            </button>
                        </div>
                    </div>
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