import { useState } from "react"
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface"
import ApiService from "../../services/ApiService"
import { NotificationService } from "../../services/NotificationService"
import { Tag, UserPreference } from "../../interfaces/ModelInterface"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { ProfileSliceAction } from "../../../store/slices/ProfileSlice"

const useProfile = ()=> {

    const dispatch = useDispatch()
    const [ interests, selectInterests ] = useState([] as Tag[])
    const preference = useSelector((state: RootState)=> state.profile.preference)

    const updateInterest = async(data: string[])=> {
        const apiService = new ApiService()
        await apiService.post<DefaultRequestResponse, any>("/api/profile/interests/update", {interests: data})
        dispatch(ProfileSliceAction.setPreference(null))
        NotificationService.success("Interest updated successfully")
    }

    const listInterest = async()=> {
        const apiService = new ApiService()
        const result = await apiService.get<DefaultRequestResponse>("/api/profile/interests")
        selectInterests(result.data)
    }

    const getUserPreference = async ()=>{
        const apiService = new ApiService();
        const data:DefaultRequestResponse<UserPreference> = await apiService.get<DefaultRequestResponse>("/api/user/preference")
        dispatch(ProfileSliceAction.setPreference(data.data))
    }

    return {
        preference,
        interests,
        listInterest,
        updateInterest,
        getUserPreference
    }
}

export default useProfile