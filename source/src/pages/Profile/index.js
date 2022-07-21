import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Button } from '@chakra-ui/react'
import { Navigate ,Link} from "react-router-dom";

function Profile({history}) {
    const authContext = useAuth()
  const   handleLogout =async () => await  authContext.logout(() => history.push("/"))
  return (
    <div>
        

        <code>{JSON.stringify(authContext.user)}</code>
<br />
<br />

<Link to={`/`}>
<Button onClick={handleLogout}>   EXIT</Button>
</Link>

    </div>
  )
}

export default Profile