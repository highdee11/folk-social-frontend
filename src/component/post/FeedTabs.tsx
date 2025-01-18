import { Link, useNavigate, useSearchParams } from "react-router-dom";

const FeedTabs = ()=> {

    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams()

    const feed = searchParams.get('feed')

    const activeClass = "text-primary border-b-2 border-primary"

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-lightFaintGray dark:text-gray-500 dark:border-darkFaintGray">
            <ul className="flex flex-wrap -mb-px w-fit mx-auto">
                <li className="me-2">
                    <Link 
                        to="?feed=following" 
                        className={`inline-block p-4 border-b-2 ${feed == 'following' && activeClass || 'border-transparent'}  rounded-t-lg `}>
                        Following
                    </Link>
                </li>
                <li className="me-2">
                    <Link 
                        to="?feed=foryou" 
                        className={`inline-block p-4 ${feed == 'foryou' && activeClass || 'border-transparent'} rounded-t-lg`}>
                        For you
                    </Link>
                </li> 
            </ul>
        </div>
    )
}

export default FeedTabs;