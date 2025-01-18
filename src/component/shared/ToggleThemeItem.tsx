import useTheme from "../../core/hooks/useTheme"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const ToggleThemeItem = ()=> {
    
    const { darkMode, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme} className="outline-none">
            {
                darkMode ?
                    (
                        <div
                            className='flex justify-start items-center gap-2 cursor-pointer'
                        >
                            <FaMoon
                                color='#fff'
                            />
                            <span className='OnestRegular text-sm text-darkColor dark:text-white'>
                                Dark Mode
                            </span>
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-start items-center gap-2 cursor-pointer'
                        >
                            <FaSun />
                            <span className='OnestRegular text-sm text-darkColor dark:text-white'>
                                Light Mode
                            </span>
                        </div>
                    )
            }
        </button>
    )
}

export default ToggleThemeItem