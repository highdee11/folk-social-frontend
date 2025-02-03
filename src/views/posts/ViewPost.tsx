import { useEffect } from "react";
import usePost from "../../core/hooks/post/usePost";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const ViewPost = ()=> {

    const location = useLocation()
    const params = useParams()
    const { loading, getSinglePost } = usePost()

    useEffect(()=> {
        getSinglePost(params.id as unknown as number)
    }, [location])

    return (
        <div className="flex">

        </div>
    )
}

export default ViewPost;