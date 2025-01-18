
import AvatarTwo from '../assets/images/avatar2.png';


const Search = () => {
    return (
        <div className="md:w-[600px] w-[97%] bg-white dark:bg-darkColor rounded-sm shadow-sm mt-12 mx-auto pt-8 px-5 pb-12">


            <div className=" flex justify-start items-center gap-4 border-b-[0.2px] border-b-grayText dark:border-b-white pb-4">
                <span className="text-darkColor dark:text-gray-200">
                    <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_25_97)">
                            <path d="M7.75 0.25C3.46875 0.25 0 3.71875 0 8C0 12.2812 3.46875 15.75 7.75 15.75C12.0312 15.75 15.5 12.2812 15.5 8C15.5 3.71875 12.0312 0.25 7.75 0.25ZM7.75 14.25C4.30312 14.25 1.5 11.4469 1.5 8C1.5 4.55312 4.30312 1.75 7.75 1.75C11.1969 1.75 14 4.55312 14 8C14 11.4469 11.1969 14.25 7.75 14.25ZM10.375 9.76875C9.725 10.55 8.76562 11 7.75 11C6.73438 11 5.775 10.5531 5.125 9.76875C4.85938 9.45 4.3875 9.40938 4.06875 9.67188C3.75 9.9375 3.70937 10.4094 3.97187 10.7281C4.90937 11.8531 6.2875 12.4969 7.75 12.4969C9.2125 12.4969 10.5906 11.8531 11.5281 10.7281C11.7937 10.4094 11.75 9.9375 11.4312 9.67188C11.1125 9.40938 10.6406 9.45 10.375 9.76875ZM4.26562 6.59375C4.50625 6.16563 4.86562 5.91875 5.25 5.91875C5.63438 5.91875 5.99375 6.16563 6.23438 6.59375L6.53125 7.125C6.59687 7.24063 6.725 7.27187 6.82188 7.24062C6.93438 7.20625 7.00938 7.1 7 6.98125C6.89688 5.66562 5.99375 4.75 5.25 4.75C4.50625 4.75 3.60312 5.66562 3.5 6.98125C3.49062 7.09687 3.56562 7.20625 3.67812 7.24062C3.78437 7.275 3.90938 7.225 3.96875 7.125L4.26562 6.59375ZM10.25 4.75C9.50625 4.75 8.60312 5.66562 8.5 6.98125C8.49062 7.09687 8.56563 7.20625 8.67813 7.24062C8.7875 7.275 8.90938 7.225 8.96875 7.125L9.26562 6.59375C9.50625 6.16563 9.86562 5.91875 10.25 5.91875C10.6344 5.91875 10.9938 6.16563 11.2344 6.59375L11.5312 7.125C11.5969 7.24063 11.725 7.27187 11.8219 7.24062C11.9344 7.20625 12.0094 7.1 12 6.98125C11.8969 5.66562 10.9937 4.75 10.25 4.75Z" fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_25_97">
                                <rect width="15.5" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>

                <div>
                    <p className=" text-darkColor dark:text-gray-200 OnestRegular">Find Friends nd accounts that you like</p>
                    <p className="text-darkColor dark:text-gray-200 OnestRegular">Try following five or more accounts    for a persoalised experience.</p>
                </div>
            </div>

            <div>
                <div className="mt-8">
                    <div className='relative'>
                        <span className=' absolute bottom-3 left-4 text-darkColor dark:text-gray-200'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <input type="text" id="search" className="bg-transparent dark:bg-transparent border  border-[#001C001A]  dark:border-white text-[#101010]  dark:text-gray-200 text-sm rounded-[4px] focus:ring-[#101010] dark:focus:ring-white focus:border-[#101010] block w-full p-2.5 pl-12 h-[45px] OnestRegular placeholder:text-[#001C0033] dark:placeholder:text-white" placeholder="Search" required />
                    </div>



                    <div>
                        <ul className=' mt-8 space-y-8'>
                            <li>
                                <div className=" flex justify-between items-center border-b-[0.5px] border-b-[rgba(16,16,16,0.24)] dark:border-b-grayText pb-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="w-[49px] h-[49px] rounded-full">
                                            <img src={AvatarTwo} />
                                        </div>
                                        <div>
                                            <p className=" text-darkColor dark:text-gray-200 OnestMedium text-sm">John Doe</p>
                                            <p className=" text-grayText dark:text-gray-200 OnestLight text-xs">JohnDoeAll</p>
                                            <p className=" text-grayText dark:text-gray-200 OnestLight text-xs">Suggested for you</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center h-5">
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-6 h-6 rounded-full cursor-pointer text-darkColor bg-gray-100 border-gray-300 dark:border-grayText focus:ring-white dark:focus:ring-white dark:ring-offset-white focus:ring-2 dark:bg-white " />
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className=" flex justify-between items-center border-b-[0.5px] border-b-[rgba(16,16,16,0.24)] dark:border-b-grayText pb-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="w-[49px] h-[49px] rounded-full">
                                            <img src={AvatarTwo} />
                                        </div>
                                        <div>
                                            <p className=" text-darkColor dark:text-gray-200 OnestMedium text-sm">John Doe</p>
                                            <p className=" text-grayText dark:text-gray-200 OnestLight text-xs">JohnDoeAll</p>
                                            <p className=" text-grayText dark:text-gray-200 OnestLight text-xs">Suggested for you</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center h-5">
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-6 h-6 rounded-full cursor-pointer text-darkColor bg-gray-100 border-gray-300 dark:border-grayText focus:ring-white dark:focus:ring-white dark:ring-offset-white focus:ring-2 dark:bg-white " />
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className=" flex justify-between items-center border-b-[0.5px] border-b-[rgba(16,16,16,0.24)] dark:border-b-grayText pb-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <div className="w-[49px] h-[49px] rounded-full">
                                            <img src={AvatarTwo} />
                                        </div>
                                        <div>
                                            <p className=" text-darkColor dark:text-gray-200 OnestMedium text-sm">John Doe</p>
                                            <p className=" text-grayText dark:text-gray-200 OnestLight text-xs">JohnDoeAll</p>
                                            <p className=" text-grayText dark:text-gray-200 OnestLight text-xs">Suggested for you</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center h-5">
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-6 h-6 rounded-full cursor-pointer text-darkColor bg-gray-100 border-gray-300 dark:border-grayText focus:ring-white dark:focus:ring-white dark:ring-offset-white focus:ring-2 dark:bg-white " />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;