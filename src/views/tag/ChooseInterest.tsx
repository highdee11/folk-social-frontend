import { useEffect } from "react";
import PrimaryButton from "../../component/shared/PrimaryButton";
import useTags from "../../core/hooks/post/useTags";
import { Tag } from "../../core/interfaces/ModelInterface";
import useProfile from "../../core/hooks/user/useProfile";
import { TagConst } from "../../core/data/const";
import { useNavigate, useSearchParams } from "react-router-dom";
import { routes } from "../../core/data/route";

const ChooseInterest = ()=> {

    const { tags, selectedTags, fetchTags, selectTag } = useTags()
    const { interests, updateInterest, listInterest, } = useProfile()
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    

    useEffect(()=> { 
        // Fetch platform tags
        fetchTags();

        // Fetch existing user interest(tags) if any
        listInterest()
    }, [])

    useEffect(()=> interests.forEach((tg:Tag)=> selectTag(tg.name)), [interests])

    const proceed = ()=> {
        if(selectedTags.length < TagConst.minSelection) return;

        updateInterest(selectedTags)
        .then(()=> {
            if(searchParams.get("redirect")){
                navigate(searchParams.get('redirect')!)
                return;
            }
            navigate(routes.home)
        })
    }

    return (
        <div className=" dark:text-gray-200 flex flex-col justify-around h-full">
            <div className="text-center xs:w-full lg:w-[50%] mx-auto mt-10 mb-7">
                <h2 className="text-5xl mb-4"> What Are You Interested In? </h2>
                <p className="text-grayText dark:text-gray-400">Tell us what you love! Choose your interests so we can recommend posts, topics, and people you'll care about.</p>
            </div>
            <div className="xs:w-full lg:w-[50%] h-full overflow-y-auto mx-auto">
                <ul className="m-0 p-0 text-center">
                    {
                       tags.map((tg: Tag)=> (
                           <li 
                            key={tg.name}
                            onClick={()=> selectTag(tg.name)}
                            className={`${selectedTags.includes(tg.name)? 'bg-primary text-white':'bg-lightFaintGray dark:bg-darkFaintGray'} 
                                w-fit px-5 py-3 rounded-md m-2 inline-block capitalize hover:cursor-pointer hover:bg-primary hover:text-white max-w-[300px] whitespace-nowrap overflow-hidden`}
                           >{tg.name.replaceAll("-", " ")}</li>
                        )) 
                    }
                </ul>
            </div>
            <div className="w-[150px] mx-auto mt-5 mb-3">
                <PrimaryButton 
                    disabled={selectedTags.length < TagConst.minSelection}
                    onTap={proceed}
                >{ interests.length > 0? 'Save':'Continue'}</PrimaryButton>
            </div>
        </div>
    )
}

export default ChooseInterest;