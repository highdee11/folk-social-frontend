
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Navigate, Outlet, Route, useLocation } from "react-router-dom"
import { routes } from "../../core/data/route"
import useUser from "../../core/hooks/auth/useUser"
import React, { useEffect, useState } from "react"
import AuthService from "../../core/services/AuthService"
import useProfile from "../../core/hooks/user/useProfile"

const AuthenticatedWrapper: React.FC = ()=> {

    const { getUser } = useUser();
    const { preference, getUserPreference} = useProfile()
    const [ loading, setLoading] = useState(true)
    const location = useLocation()

    useEffect(()=> { 
        setLoading(true) 
        let actions = [getUser().catch(()=> AuthService.logout())]

        if(preference == null){
            actions.push(getUserPreference())
        }
        Promise.all(actions).then(()=> {
            setLoading(false); 
        })
    }, [preference])
    
    const isAuthenticated = useSelector((state: RootState)=> state.auth.auth_token) && true

    
    if(loading) { return <div className=""></div> }
    
    if(isAuthenticated){
        if(!preference?.has_interest && location.pathname != routes.interests) {
            return <Navigate to={routes.interests} />
        }

        return (<div>
            <div className="p-5 h-screen relative overflow-hidden">
                <Outlet />
            </div>
        </div>)
    }
        
    <Navigate to={routes.login} />
}

export default AuthenticatedWrapper;