import { NavLink } from "react-router-dom"
import { SideBarMenuItemProps } from "../../core/interfaces/PropsInterface"

const SideBarMenuItem = ({
    url,
    label,
    darkMode,
    children
}: SideBarMenuItemProps)=> { 

    return (
        <NavLink to={url} className={`OnestRegular text-darkColor dark:text-gray-200  hover:bg-[#0000000f] dark:hover:bg-[#1f1f1f]  ease-in-out duration-150 text-base py-2.5 rounded-md flex gap-3 justify-start items-center w-full px-5
            ${darkMode
                ?
                "darkSidebar_link"
                :
                "sidebar_link"
            }`} >
            { children }
            <span className='text-sm font-bold'>
                { label }
            </span>
        </NavLink>
    )
}

export default SideBarMenuItem