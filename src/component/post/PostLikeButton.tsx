import { useEffect } from "react"
import usePost from "../../core/hooks/post/usePost"
import { PostStatistics, PostStatisticsItem } from "../../core/interfaces/ModelInterface"

const PostLikeButton: React.FC<{id: number, stat: PostStatisticsItem, like: boolean}> = ({id, stat, like})=> {

    const { 
        liked,
        likeCount,
        setLiked,
        setLikeCount,
        toggleLike
    } = usePost(id)

    useEffect(()=> {
        setLiked(like)
        setLikeCount(stat.data?.count ?? 0)
    }, [])
    

    const color = liked ? "text-primary fill-primary":"text-black dark:text-white "

    return (
        <div onClick={toggleLike} className="flex hover:cursor-pointer justify-center items-center gap-2">
            <span>
                <svg className={`${color}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <p className=" OnestMedium text-base dark:text-gray-200 text-darkColor">
                { likeCount <= 0 ? "":likeCount}
            </p>
        </div>
    )
}

export default PostLikeButton