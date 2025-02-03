import React, { Ref } from "react";
import { Post } from "../../core/interfaces/ModelInterface";

const ViewPostModal:React.FC<{post: Post, ref: Ref<HTMLDialogElement>}> = ({ post, ref})=> {

    return (
        <dialog ref={ref}>
            <div className="">
                <h1>Hellow word</h1>
            </div>
        </dialog>
    );
}

export default ViewPostModal;