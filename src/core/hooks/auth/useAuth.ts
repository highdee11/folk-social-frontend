import { useState } from "react";
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface";
import { SignInCredentials, SignInRequest } from "../../interfaces/AuthInterface";
import ApiService from "../../services/ApiService";
import { useDispatch, useSelector } from "react-redux"; 
import { AuthSliceAction } from "../../../store/slices/AuthSlice";

const useAuth = ()=> {
    const dispatch = useDispatch();
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    
    
    const signin = async (credentials: SignInRequest)=> {
         
        if(isLoading) return;

        setIsLoading(true)
        setError(null)
        try{
            const service = new ApiService();
            const data: DefaultRequestResponse = 
                await service.post<DefaultRequestResponse, any>("/api/auth/login", credentials)

            // Set token and user
            dispatch(AuthSliceAction.setAuthToken(data.data.token))
            dispatch(AuthSliceAction.setUser(data.data))

            setIsLoading(false)
            console.log(data)
        }catch(e:any){
            setIsLoading(false)
            console.log(e);
            setError(e.response?.data?.message || e.message)
            throw e
        }
        
    }

    const signOut = async ()=> {

        dispatch(AuthSliceAction.signout()); 
        const service = new ApiService();
        await service.get<DefaultRequestResponse>("/api/auth/logout")
    }

    return {
        error,
        isLoading, 
        signin,
        signOut
    }
}

export default useAuth;