import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const PostSkeletonItem = () => {
    return (
        <div className="md:w-[500px] w-full h-full post_box mx-auto content-center ">
            <div className="flex flex-col h-[850px] dark:bg-darkFaintGray bg-[#F9F9F9] rounded-[8px] pt-5">
                <div className="flexjustify-between items-start pb-2 px-4">
                    <div className="flex gap-3">
                        <Skeleton circle={true} width={54} height={54} />
                        <div>
                            <Skeleton width={120} height={16} style={{ marginBottom: "0.5rem" }} />
                            <Skeleton width={80} height={12} style={{ marginBottom: "0.3rem" }} />
                            <Skeleton width={60} height={12} />
                        </div>
                    </div> 
                </div>
                <div className="h-full flex flex-col justify-between">
                    <div className="h-full mt-4">
                        <Skeleton width="100%" height="100%" />
                    </div>

                    <div className="px-4 my-2">
                        <Skeleton width="100%" height={16} style={{ marginBottom: "0.5rem" }} />
                        <Skeleton width="75%" height={16} />
                    </div>
                </div>
                <div id="icons" className="py-5 px-12">
                    <ul className="flex justify-between">
                        {[1, 2, 3, 4].map((index) => (
                            <li key={index}>
                                <div className="flex justify-center items-center gap-2">
                                    <Skeleton circle={true} width={24} height={24} />
                                    <Skeleton width={40} height={16} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PostSkeletonItem;