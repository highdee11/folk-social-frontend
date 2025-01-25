import { useState } from "react"
import { DefaultRequestResponse } from "../interfaces/ApiServiceInterface"
import ApiService from "../services/ApiService"
import { Paginated, User } from "../interfaces/ModelInterface"

const useSearch = ()=> {

    const [userSuggestions, setUserSuggestions ] = useState([] as User[])
    const [loading, setLoading] = useState(false)
    
    const getUserSuggestions = async(search: string = "")=> {
        try {
            setLoading(true)
            const apiService = new ApiService();
            const api = search.length == 0 ? "/api/user/suggest": "/api/user/search?search="+search
            const data:DefaultRequestResponse<Paginated<User>> = await apiService.get<DefaultRequestResponse>(api)
            setUserSuggestions((data.data?.content ?? []) as User[])
        }finally {
            setLoading(false)
        }
    }

    const removeSuggestion = (id:number)=> {
        const temp = userSuggestions.filter((e)=>e.id !=id);
        setUserSuggestions([...temp])
    }

    return {
        loading,
        userSuggestions,
        getUserSuggestions,
        removeSuggestion
    }
}

export default useSearch