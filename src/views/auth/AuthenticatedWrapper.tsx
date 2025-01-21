
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Navigate, Outlet, Route } from "react-router-dom"
import { routes } from "../../core/data/route"
import Layout from "../../component/Layout"
import useUser from "../../core/hooks/auth/useUser"
import { useEffect } from "react"
import AuthService from "../../core/services/AuthService"

const AuthenticatedWrapper = ()=> {

    const { getUser } = useUser();

    useEffect(()=> {
        getUser()
        .catch(()=> AuthService.logout())
    }, [])
    
    const hasToken = useSelector((state: RootState)=> state.auth.auth_token) && true

    return hasToken? 
        <div>
            <div className="p-5 relative bg-lightFaintGray dark:bg-[#101010] h-screen overflow-hidden">
                <Outlet />
            </div>
        </div>
     : <Navigate to={routes.login} />
}

export default AuthenticatedWrapper;