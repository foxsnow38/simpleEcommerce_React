import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { useAuth } from '../context/AuthContext'

function ProtectedRoute() {
 const authContext = useAuth()
if (!authContext.loggedIn) {
    return(
    <Navigate to={`/`}/>
    )
}

return <Outlet/>

}

export default ProtectedRoute