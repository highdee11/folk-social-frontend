import { useEffect, useState } from "react"
import ApiService from "../../services/ApiService"

const usePost = (id: number)=> {

    const apiService = new ApiService()
    const [ liked, setLiked ] = useState(false)
    const [ likeCount, setLikeCount ] = useState(0)
    const [loading, setLoading] = useState(false)

    
    const getSinglePost = async ()=> {
        try {
            setLoading(true)
            const response = await apiService.get(`api/post/${id}`)
            console.log(response)
        }finally {
            setLoading(false)
        }
    }

    const toggleLike = async () => {
        apiService.post("api/likes/toggle", {"post_id": id})
        setLikeCount((likeCount)=> !liked? likeCount+1:likeCount-1)
        setLiked((liked )=> !liked)
    }

    return {
        loading,
        liked,
        likeCount,
        toggleLike,
        setLiked,
        setLikeCount,
        getSinglePost
    }
}

export default usePost;