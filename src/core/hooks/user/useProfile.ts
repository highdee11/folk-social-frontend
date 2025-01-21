import { useState } from "react"
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface"
import ApiService from "../../services/ApiService"
import { NotificationService } from "../../services/NotificationService"
import { Tag } from "../../interfaces/ModelInterface"

const useProfile = ()=> {

    const [ interests, selectInterests ] = useState([] as Tag[])

    const updateInterest = async(data: string[])=> {
        const apiService = new ApiService()
        await apiService.post<DefaultRequestResponse, any>("/api/profile/interests/update", {interests: data})
        NotificationService.success("Interest updated successfully")
    }

    const listInterest = async()=> {
        const apiService = new ApiService()
        const result = await apiService.get<DefaultRequestResponse>("/api/profile/interests")
        selectInterests(result.data)
    }

    return {
        interests,
        listInterest,
        updateInterest
    }
}

export default useProfile