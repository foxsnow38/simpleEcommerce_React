import React from 'react'
import { Alert } from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import { Navigate ,Outlet } from 'react-router-dom'

function ProtectedAdmin() {
const authContext = useAuth()


  return (
    <>
    { authContext.user?.role!=`admin` &&  !authContext.isUserAdmin && <Navigate to={`/`} replace={true}/>}

<Outlet/>

    </>

  )



}

export default ProtectedAdmin