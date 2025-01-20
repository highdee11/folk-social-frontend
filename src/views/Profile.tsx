import Avatar from '../assets/images/highdee.ai.jpeg';
const Profile = () => {
    return (
        <div className=" relative lg:w-auto w-[98%] mx-auto bg-darkColor mt-12 rounded-[12px] py-5 px-8 flex justify-between items-center shadow-sm profileBg">

            <div className=" flex justify-start items-center gap-6">

                <div className=" w-[190px] h-[190px] bg-[#B190B6]  rounded-full">
                    <img src={Avatar} className=' rounded-full' />
                </div>

                <div>
                    <p className=' text-white dark:text-darkColor'>
                        highdee.ai
                    </p>

                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <p className=" text-base flex justify-start items-center gap-1">
                                    <span className='dark:text-darkColor text-white OnestMedium'>2563</span>
                                    <span className='dark:text-darkColor text-white text-sm'>Following</span>
                                </p>
                            </li>
                            <li>
                                <p className=" text-base flex gap-1">
                                    <span className='dark:text-darkColor text-white OnestMedium'>2563</span>
                                    <span className='dark:text-darkColor text-white text-sm'>Followers</span>
                                </p>
                            </li>
                            <li>
                                <p className=" text-base flex gap-1">
                                    <span className='dark:text-darkColor text-white OnestMedium'>2563</span>
                                    <span className='dark:text-darkColor text-white text-sm'>Following</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div>
                <button className="px-5 py-2 bg-white rounded-[8px]  text-darkColor">
                    Edit Profile
                </button>
            </div>
        </div>
    );
}

export default Profile;