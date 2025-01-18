
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Navigate, useNavigate } from "react-router-dom"
import { routes } from "../../core/data/route"
import { useEffect } from "react"

const PublicWrapper = (WrappedComponent: any)=> {

    return ()=> {
        
        const hasSession = useSelector((state: RootState)=> state.auth.auth_token) != null
        const navigate = useNavigate()
        
        // if user is logged in redirect to home
        useEffect(()=>{
            if(hasSession){
                navigate(routes.home)
            }
        }, [])
        
        const hasToken = useSelector((state: RootState)=> state.auth.auth_token) && true
        
        return !hasToken?  <WrappedComponent /> : <Navigate to={routes.home} />
    }

   
}

export default PublicWrapper;