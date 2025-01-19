const Profile = () => {
    return (
        <div className=" relative lg:w-auto w-[98%] mx-auto bg-white mt-12 rounded-[12px] pt-5 px-8 flex justify-between items-center">

            <div className=" flex justify-start items-center gap-6">

                <div className=" w-[190px] h-[190px] border rounded-full">

                </div>

                <div>
                    <p>
                        highdee.ai
                    </p>

                    <div>
                        <ul>
                            <li>

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