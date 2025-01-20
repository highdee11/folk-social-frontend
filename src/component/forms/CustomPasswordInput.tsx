import { useState } from "react";
import { CustomInputProps, CustomPasswordInputProps } from "../../core/interfaces/PropsInterface";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTheme from "../../core/hooks/useTheme";

const CustomPasswordInput = ({
    label,
    name, 
    value, 
    onChange
}: CustomPasswordInputProps)=>{ 

    const { darkMode } = useTheme()
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm OnestRegular text-[#101010] dark:text-grayText">{label}</label>
                <div className='relative'>
                    <span className=' absolute bottom-0 top-0 m-auto h-fit w-fit left-4'>
                        <svg width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M12.3176 7.08603V5.47578C12.3176 3.59103 10.7891 2.06253 8.90431 2.06253C7.01956 2.05428 5.48506 3.57528 5.47681 5.46078V5.47578V7.08603" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.7624 15.937H6.03162C4.46112 15.937 3.18762 14.6642 3.18762 13.093V9.87623C3.18762 8.30498 4.46112 7.03223 6.03162 7.03223H11.7624C13.3329 7.03223 14.6064 8.30498 14.6064 9.87623V13.093C14.6064 14.6642 13.3329 15.937 11.7624 15.937Z" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.89709 10.6523V12.3181" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <input
                        value={value}
                        onChange={onChange}
                        type={showPassword? 'text':'password'}
                        id={name} 
                        name={name}
                        className="bg-lightFaintGray dark:bg-darkFaintGray border border-[#001C001A] text-[#101010] dark:text-gray-200 text-sm rounded-[4px] focus:ring-[#101010] focus:border-[#101010] block w-full p-2.5 pl-12 h-[50px] OnestRegular placeholder:text-[#001C0033]"
                        placeholder={name} 
                        required />

                    <button type='button' className='flex' onClick={()=> setShowPassword(!showPassword)}>
                        <span className='absolute right-4 top-4'>
                            {!showPassword? (<FaEyeSlash
                                size={20}
                                className="text-[#101010] dark:text-gray-200"
                            />):(<FaEye
                                size={20}
                                className="text-[#101010] dark:text-gray-200"
                            />)}
                        </span>
                    </button>
            </div>
        </>
    )
}

export default CustomPasswordInput;