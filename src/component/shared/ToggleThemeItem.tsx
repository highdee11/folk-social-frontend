import useTheme from "../../core/hooks/useTheme"
import { FaSun } from "react-icons/fa6";
import { FaLightbulb, FaMoon } from "react-icons/fa";

const ToggleThemeItem = ()=> {
    
    const { darkMode, toggleTheme } = useTheme()

    return (
        <div className="w-fit bg-lightFaintGray dark:bg-darkFaintGray py-3 px-5 rounded-full">
            <button onClick={toggleTheme} className="outline-none">
                {
                    !darkMode ?
                        (
                            <div
                                className='flex justify-start items-center gap-2 cursor-pointer'
                            >
                                <FaMoon
                                    
                                />
                                <span className='OnestRegular text-sm text-darkColor dark:text-gray-200'>
                                    Goodnight Moon
                                </span>
                            </div>
                        )
                        :
                        (
                            <div className='flex justify-start items-center gap-2 cursor-pointer'
                            >
                                <FaLightbulb color='#fff'/>
                                <span className='OnestRegular text-sm text-darkColor dark:text-gray-200'>
                                    Hello Sunshine
                                </span>
                            </div>
                        )
                }
            </button>
        </div>
    )
}

export default ToggleThemeItem