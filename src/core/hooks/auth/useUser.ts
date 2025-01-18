import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store" 
import ApiService from "../../services/ApiService"
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface"
import { AuthSliceAction } from "../../../store/slices/AuthSlice"

const useUser = ()=> {

    const dispatch = useDispatch();

    const authToken = useSelector((state: RootState)=> state.auth.auth_token)
    const user = useSelector((state: RootState)=> state.auth.user)
    

    const getUser = async ()=>{
        const apiService = new ApiService();
        const data:DefaultRequestResponse = await apiService.get<DefaultRequestResponse>("/api/user")
        dispatch(AuthSliceAction.setUser(data.data))
    }


    return {
        user,
        authToken,
        getUser
    }
}

export default useUser;