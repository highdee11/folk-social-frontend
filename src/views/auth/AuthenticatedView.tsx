
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Navigate, Route } from "react-router-dom"
import { routes } from "../../core/data/route"
import Layout from "../../component/Layout"
import useUser from "../../core/hooks/auth/useUser"
import { useEffect } from "react"

const AuthenticatedView = ()=> {

    const { getUser } = useUser();

    useEffect(()=> {
        getUser()
    }, [])
    
    const hasToken = useSelector((state: RootState)=> state.auth.auth_token) && true

    return hasToken? <Layout /> : <Navigate to={routes.login} />
}

export default AuthenticatedView;