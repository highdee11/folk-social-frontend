
import AvatarTwo from '../assets/images/avatar2.png';
import AvatarThree from '../assets/images/avatar3.png';
import Avatar from '../assets/images/avatar1.png';

const WhoToFollow = ()=> {

    return (
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
    )
}