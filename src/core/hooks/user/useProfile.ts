import { useState } from "react"
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface"
import ApiService from "../../services/ApiService"
import { NotificationService } from "../../services/NotificationService"
import { ProfileStat, Tag, User } from "../../interfaces/ModelInterface"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { ProfileSliceAction } from "../../../store/slices/ProfileSlice"

const useProfile = ()=> {

    const dispatch = useDispatch()
    const apiService = new ApiService()

    const [ profileStat, setProfileStat ] = useState<ProfileStat|null>(null)
    const [ profile, setProfile ] = useState<User|null>(null)
    const [interests, selectInterests ] = useState([] as Tag[])
    const preference = useSelector((state: RootState)=> state.profile.preference)

    const updateInterest = async(data: string[])=> {
        await apiService.post<DefaultRequestResponse, any>("/api/profile/interests/update", {interests: data})
        dispatch(ProfileSliceAction.setPreference(null))
        NotificationService.success("Interest updated successfully")
    }

    const listInterest = async()=> {
        const result = await apiService.get<DefaultRequestResponse>("/api/profile/interests")
        selectInterests(result.data)
    }

    const getUserPreference = async ()=>{
        const data:DefaultRequestResponse<User> = await apiService.get<DefaultRequestResponse>("/api/user/preference")
        dispatch(ProfileSliceAction.setPreference(data.data))
    }

    const getProfile = async (username: string)=> {
        const data: DefaultRequestResponse = await apiService.get<DefaultRequestResponse>("/api/profile/"+username)
        setProfile(data.data)
    }

    const getProfileStat = async (userId: number)=> {
        const data: DefaultRequestResponse = await apiService.get<DefaultRequestResponse>("/api/profile/stats/"+userId)
        setProfileStat(data.data)
    }
 
    return {
        profileStat,
        preference,
        interests,
        profile,
        getProfile,
        listInterest,
        getProfileStat,
        updateInterest,
        getUserPreference,
    }
}

export default useProfile