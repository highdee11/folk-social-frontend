import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface";
import ApiService from "../../services/ApiService";

const useFollow = ()=> {
    const apiService = new ApiService()

    const followUser = async (userId: number)=> {
        const payload = {
            following_id: userId
        }

        const result:DefaultRequestResponse = await apiService.post<DefaultRequestResponse, any>("/api/follow", payload)
        console.log(result)
    }

    return {
        followUser
    }
}

export default useFollow;