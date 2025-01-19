import { useState } from "react";
import { DefaultRequestResponse } from "../../interfaces/ApiServiceInterface";
import { SignInCredentials, SignInRequest, SignUpRequest } from "../../interfaces/AuthInterface";
import ApiService from "../../services/ApiService";
import { useDispatch } from "react-redux"; 
import { AuthSliceAction } from "../../../store/slices/AuthSlice";

const useAuth = ()=> {
    const dispatch = useDispatch();
    
    const signInData: SignInCredentials = {username: import.meta.env.VITE_DEMO_USERNAME, password: import.meta.env.VITE_DEMO_PASSWORD}
    const signUpData: SignUpRequest = {
        username: import.meta.env.VITE_DEMO_USERNAME, password: import.meta.env.VITE_DEMO_PASSWORD,
        firstname: "",
        lastname: "",
        email: "",
        dob:""
    }
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
            console.log(e)
            setIsLoading(false)
            setError(e.response?.data?.message || e.message)
            console.log(e);
            throw e
        }
        
    }

    const SignUp = async (credentials: SignInRequest)=> {
         
        if(isLoading) return;

        setIsLoading(true)
        setError(null)
        try{
            const service = new ApiService();
            const data: DefaultRequestResponse = 
            await service.post<DefaultRequestResponse, any>("/api/auth/create-account", credentials)

            setIsLoading(false)
            console.log(data)
        }catch(e:any){
            console.log(e)
            setIsLoading(false)
            setError(e.response?.data?.message || e.message)
            console.log(e);
            throw e
        }
        
    }
    const signOut = async ()=> {

        dispatch(AuthSliceAction.signout()); 
        const service = new ApiService();
        await service.get<DefaultRequestResponse>("/api/auth/logout")
    }

    return {
        signin,
        SignUp,
        signOut,
        error,
        isLoading, 
        signInData,
        signUpData,
    }
}

export default useAuth;