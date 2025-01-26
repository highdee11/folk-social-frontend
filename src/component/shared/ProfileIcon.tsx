import React from "react"
import { User } from "../../core/interfaces/ModelInterface"

const ProfileIcon: React.FC<{user: User, textSizeClass?: string}> = ({user, textSizeClass})=> {
    
    return (
        <div className="w-full h-full bg-primary flex justify-center items-center text-white rounded-full">
            <span className={`uppercase font-[400] text-[${textSizeClass ?? '1.2em'}]`}>{user.firstname[0]}{user.lastname[0]}</span> 
        </div>
    )
}

export default ProfileIcon