import Avatar from '../assets/images/highdee.ai.jpeg';
const Profile = () => {
    return (
        <div className=" relative lg:w-auto w-[98%] mx-auto bg-white mt-12 rounded-[12px] py-5 px-8 flex justify-between items-center shadow-sm profileBg">

            <div className=" flex justify-start items-center gap-6">

                <div className=" w-[190px] h-[190px] bg-[#B190B6] border rounded-full">
                    <img src={Avatar} className=' rounded-full' />
                </div>

                <div>
                    <p>
                        highdee.ai
                    </p>

                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <p className=" text-base flex gap-1">
                                    <span className='text-darkColor OnestMedium'>2563</span>
                                    <span>Following</span>
                                </p>
                            </li>
                            <li>
                                <p className=" text-base flex gap-1">
                                    <span className='text-darkColor OnestMedium'>2563</span>
                                    <span>Followers</span>
                                </p>
                            </li>
                            <li>
                                <p className=" text-base flex gap-1">
                                    <span className='text-darkColor OnestMedium'>2563</span>
                                    <span>Following</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div>
                <button className="px-5 py-2 bg-darkColor rounded-[8px]  text-white">
                    Edit Profile
                </button>
            </div>
        </div>
    );
}

export default Profile;