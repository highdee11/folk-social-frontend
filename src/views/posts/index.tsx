import FeedTabs from "../../component/post/FeedTabs";
import FYP from "./FYP";

const Home = () => { 
    
    return (
        <div className="h-full relative lg:w-auto w-[98%] lg:mx-0 mx-auto">
            <div id="posts" className="h-full flex flex-col px-3">
                {/* TABS */} 
                
                <div className="">
                    <FeedTabs />
                </div>

                {/* BODY */}
                <div className="h-full">
                    <FYP />
                </div>
            </div>
        </div>
    );
}

export default Home;