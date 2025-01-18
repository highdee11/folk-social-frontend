import FeedTabs from "../../component/post/FeedTabs";
import FYP from "./FYP";

const Home = () => { 
    
    return (
        <div className=" relative lg:w-auto w-[98%] lg:mx-0 mx-auto">
            <div id="posts" className="h-full px-3">
                {/* TABS */} 
                
                <FeedTabs />

                {/* BODY */}
                <div className="">
                    <FYP />
                </div>
            </div>
        </div>
    );
}

export default Home;