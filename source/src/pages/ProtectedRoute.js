import React, { useEffect, useState } from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { fetchMe } from '../api'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute() {
    
 const authContext = useAuth()
const [me,setMe] =useState(null)
const [loading,setLoading]=useState(true) 

useEffect(()=>{
    (async ()=>{
      
        try{
          authContext.setLoading(true)
         me =  await  fetchMe()
      if(me?.message!= `Unauthorized`)
      {
      await  authContext.setLoggedIn(true)
    await    authContext.setUser(me)
   await     setLoading(false)
   if(authContext.user?.role!=`admin`){
    authContext.setIsUserAdmin(true)
   }
  
      }
      else{
        authContext.setLoggedIn(false)
        authContext.setUser(null)
        me=null
      }
         
        }
          catch(e){
            console.log(e)
          }
    
          authContext.setLoading(false)
          console.log(authContext.loading)
          setLoading(false)
      }
      )()},[])


if (!authContext.loggedIn && me==null && loading==false ) {
    return(
        <div>
  <Navigate to={`/`}/>
    </div>
    )

}

return <Outlet/>

}

export default ProtectedRoute