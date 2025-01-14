import { NavLink } from 'react-router-dom';
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        initFlowbite();
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    })


    return (
        <div className="px-4 pt-12">
            <div className=" mb-16">
                <div className=" w-[90px] h-[90px] bg-darkColor dark:bg-white rounded-full flex justify-center items-center mx-auto relative">
                    <p className=" OnestBold text-center text-xl text-white dark:text-darkColor">
                        LOGO
                    </p>
                    <div className=' w-[20px] h-[20px] bg-darkColor dark:bg-white rounded-full absolute right-2 bottom-0'>

                    </div>
                </div>

            </div>

            <ul className="space-y-5 w-full">

                <li>
                    <NavLink to="/" className={`OnestRegular text-darkColor dark:text-white hover:bg-darkColor dark:hover:bg-white hover:text-white dark:hover:text-darkColor ease-in-out duration-150 text-base h-[45px] rounded-lg block flex gap-3 justify-start items-center w-full pl-5
                         ${darkMode
                            ?
                            "darkSidebar_link"
                            :
                            "sidebar_link"
                        }`}

                    >
                        <span className="text-darkColor dark:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/search" className={`OnestRegular text-darkColor dark:text-white hover:bg-darkColor dark:hover:bg-white hover:text-white dark:hover:text-darkColor ease-in-out duration-150 text-base h-[45px] rounded-lg block flex gap-3 justify-start items-center w-full pl-5
                        ${darkMode
                                ?
                                "darkSidebar_link"
                                :
                                "sidebar_link"
                            }`}
                    >
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        Search
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/login" className={`OnestRegular text-darkColor dark:text-white hover:bg-darkColor dark:hover:bg-white hover:text-white dark:hover:text-darkColor ease-in-out duration-150 text-base h-[45px] rounded-lg block flex gap-3 justify-start items-center w-full pl-5
                        ${darkMode
                                ?
                                "darkSidebar_link"
                                :
                                "sidebar_link"
                            }`}
                    >
                        <span className="text-darkColor dark:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9951 16.6766V14.1396" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.19 5.33008C19.88 5.33008 21.24 6.70008 21.24 8.39008V11.8301C18.78 13.2701 15.53 14.1401 11.99 14.1401C8.45 14.1401 5.21 13.2701 2.75 11.8301V8.38008C2.75 6.69008 4.12 5.33008 5.81 5.33008H18.19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.4951 5.32576V4.95976C15.4951 3.73976 14.5051 2.74976 13.2851 2.74976H10.7051C9.48512 2.74976 8.49512 3.73976 8.49512 4.95976V5.32576" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.77441 15.4829L2.96341 17.9919C3.09141 19.6829 4.50041 20.9899 6.19541 20.9899H17.7944C19.4894 20.9899 20.8984 19.6829 21.0264 17.9919L21.2154 15.4829" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        Jobs
                    </NavLink>
                </li>


            </ul>

            <ul className='pt-6 space-y-6 border-t border-t-grayText mt-14'>

                <li className=' pl-5'>
                    <button onClick={toggleTheme}>
                        {
                            darkMode ?
                                (
                                    <div
                                        className='flex justify-start items-center gap-2 cursor-pointer'
                                    >
                                        <FaMoon
                                            color='#fff'
                                        />
                                        <span className='OnestRegular text-darkColor dark:text-white'>
                                            Dark Mode
                                        </span>
                                    </div>
                                )
                                :
                                (
                                    <div className='flex justify-start items-center gap-2 cursor-pointer'
                                    >
                                        <FaSun />
                                        <span className='OnestRegular text-darkColor dark:text-white'>
                                            Light Mode
                                        </span>
                                    </div>
                                )
                        }
                    </button>
                </li>

                <li>
                    <NavLink to="/login" className="OnestRegular text-[#EA4435] text-base ease-in-out duration-150 h-[45px] rounded-lg flex gap-3 justify-start items-center w-fit pl-5">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0165 7.38948V6.45648C15.0165 4.42148 13.3665 2.77148 11.3315 2.77148H6.45646C4.42246 2.77148 2.77246 4.42148 2.77246 6.45648V17.5865C2.77246 19.6215 4.42246 21.2715 6.45646 21.2715H11.3415C13.3705 21.2715 15.0165 19.6265 15.0165 17.5975V16.6545" stroke="#EA4435" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.8096 12.0215H9.76855" stroke="#EA4435" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.8818 9.1062L21.8098 12.0212L18.8818 14.9372" stroke="#EA4435" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        Logout
                    </NavLink>
                </li>
            </ul>


        </div>
    );

}

export default Sidebar;