import FeedTabs from "../../component/post/FeedTabs";
import FYP from "./FYP";

const Home = () => { 
    
    return (
        <div className="h-full relative lg:w-auto w-full lg:mx-0 mx-auto">
            <div id="posts" className="h-full flex flex-col px-0 md:px-3">
                {/* TABS */} 
                
                <div className="hidden sm:block">
                    <FeedTabs />
                </div>

                {/* BODY */}
                <div className="h-full sm:h-[calc(100%-50px)]">
                    <FYP />
                </div>
            </div>
        </div>
    );
}

export default Home;