
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FollowedPosts from '../../component/post/FollowedPosts';
import { routes } from '../../core/data/route';
import { FeedType } from '../../core/data/const';


const FYP = () => {
    const [ searchParam ] = useSearchParams()
    const navigate = useNavigate()
    const [ feed, setFeed ] = useState(FeedType.following)
    
    

    useEffect(()=> {
        if(searchParam.get("feed") == null){
            navigate("?feed="+feed)
        }else{
            setFeed(searchParam.get("feed")!)
        }
    }, [searchParam])
    
    

    return ( 
        <FollowedPosts />
    )
}

export default FYP;