import { useState } from "react"
import ApiService from "../../services/ApiService"

const usePost = ()=> {

    const apiService = new ApiService()
    const [loading, setLoading] = useState(false)

    
    const getSinglePost = async (postId: number)=> {
        try {
            setLoading(true)
            const response = await apiService.get(`api/post/${postId}`)
            console.log(response)
        }finally {
            setLoading(false)
        }
    }

    return {
        loading,
        getSinglePost
    }
}

export default usePost;