import { User } from "../../core/interfaces/ModelInterface"

const ProfileIcon = ({user}: {user: User})=> {
    
    return (
        <div className="w-full h-full bg-primary flex justify-center items-center text-white rounded-full">
            <span className="uppercase font-[400] text-[1.5em]">{user.firstname[0]}{user.lastname[0]}</span>
            {/* <img src={} /> */}
        </div>
    )
}

export default ProfileIcon