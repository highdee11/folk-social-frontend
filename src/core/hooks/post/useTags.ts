import { useState } from "react"
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface"
import { Tag } from "../../interfaces/ModelInterface"
import ApiService from "../../services/ApiService"
import { TagConst } from "../../data/const"
import { NotificationService } from "../../services/NotificationService"

const useTags = ()=> {
 

    const [tags, setTags] = useState([] as Tag[])
    const [selectedTags, setSelectedTags] = useState([] as string[])

    const selectTag = (name:string)=> {
        let temp = selectedTags;
        if(temp.includes(name)){
            temp = temp.filter((e)=> e != name)
        }else {
            if(selectedTags.length > TagConst.maxSelection) {
                NotificationService.error("Max. selection reached")
                return
            }
            temp.push(name)
        }
         
        setSelectedTags([...temp]) 
    }

    const fetchTags = async ()=> {
        const apiServices = new ApiService()
        const result = await apiServices.get<DefaultRequestResponse>("/api/tags")
        setTags(result.data as Tag[])
    }


    return {
        tags, 
        selectedTags,
        selectTag,
        fetchTags
    }
}

export default useTags;