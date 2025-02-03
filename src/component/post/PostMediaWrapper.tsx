import React from "react";
import { Post } from "../../core/interfaces/ModelInterface";
import PostImageCarousel from "./PostImageCarousel";

const PostMediaWrapper: React.FC<{post: Post}> = ({post})=> {

    return (
        <PostImageCarousel images={post.media}/>
    )
}

export default PostMediaWrapper;