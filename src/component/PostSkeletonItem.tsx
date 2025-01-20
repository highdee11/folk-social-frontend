import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const PostSkeletonItem = () => {
    return (
        <div className="w-[600px] post_box mx-auto dark:bg-darkFaintGray bg-[#F9F9F9] rounded-[8px] pt-5">

            <div className="flex justify-between items-start pb-2 px-4">
                <div className="flex gap-3">
                    <Skeleton circle={true} width={54} height={54} />
                    <div>
                        <Skeleton width={120} height={16} style={{ marginBottom: "0.5rem" }} />
                        <Skeleton width={80} height={12} style={{ marginBottom: "0.3rem" }} />
                        <Skeleton width={60} height={12} />
                    </div>
                </div>
                <Skeleton circle={true} width={24} height={24} />
            </div>

            <div className="px-4">
                <Skeleton width="100%" height={16} style={{ marginBottom: "0.5rem" }} />
                <Skeleton width="75%" height={16} />
            </div>

            <div className="sm:h-[320px] h-[220px] mt-4">
                <Skeleton width="100%" height="100%" />
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
    );
}

export default PostSkeletonItem;