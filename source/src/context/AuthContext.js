import { createContext, useContext, useState } from "react";
import { Spinner, Flex } from '@chakra-ui/react'
import { fetchLogout } from "../api";
const AuthContext = createContext()



const AuthProvider = ({children}) =>{
const [user,setUser] = useState(null)
const [loggedIn,setLoggedIn]= useState(false)
const[loading,setLoading]= useState(false)

const login =(data) =>{
    setLoggedIn(true)
    setUser(data)
}

const logout = async (callback) =>{
    setLoggedIn(false)
    setUser(null)
    await fetchLogout()
    localStorage.setItem(`access-token`,null)
    localStorage.setItem(`refresh-token`,null)
    callback()
}

const values ={
user,
setUser,
setLoggedIn,
loggedIn,
login,
loading,
setLoading,
logout

}


return(

<div>


<div style={{visibility:`${!loading?"visible":"hidden"}`}}>
<AuthContext.Provider    value={values} >{children}</AuthContext.Provider>
</div>

<div style={{visibility:`${loading?"visible":"hidden"}`}}>
<Flex justifyContent="center" alignItems="center" height="100vh" >
           <Spinner thickness="40px" color='blue'  />
       </Flex>

</div>
</div>
)
}

const useAuth = () =>useContext(AuthContext)

export {AuthProvider,useAuth}
