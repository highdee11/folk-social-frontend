import { useEffect } from "react";
import usePost from "../../core/hooks/post/usePost";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const ViewPost = ()=> {

    const location = useLocation()
    const params = useParams()
    const { loading, getSinglePost } = usePost(params.id as unknown as number)

    useEffect(()=> {
        getSinglePost()
    }, [location])

    return (
        <div className="flex">

        </div>
    )
}

export default ViewPost;