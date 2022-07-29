import React, { useEffect, useRef, useState } from 'react'
import {Link}  from "react-router-dom";

import { Button, ButtonGroup ,Text,Box, Input} from '@chakra-ui/react'
import { useAuth } from '../../context/AuthContext';
import { useBasket } from '../../context/BasketContext';
import "./navmenu.css"
import styled from 'styled-components';





function Navbar() {
 const [status,setStatus]=useState(false)
 const [timer,setTimer] = useState(0)
 const authContext = useAuth()
 const basketContext = useBasket()
 const checkRef= useRef()
 const user = authContext.user?.role

 const BtnOnOFf= () =>{
//   const list = Object.values(liRef.current.children)
// list.map((item,index)=> item.setAttribute(`background`,`red`))
if (status) setStatus(false)
if (!status) setStatus(true)
 }

 useEffect(()=>{
  if (!status) {
  for (let index = 0; index < 10; index++) {
    setTimer(timer+1)
  
  }
}

if (status) setStatus(false)
 },[status])
 


  return (
    
    <nav className={'nav'}>
    
 
  <Box className={'left'}>
    <Box className={'logo'}>

    <Link to="/">Ecommerce</Link>
    </Box>    




    </Box> 
<Box className={'middle'}>
<Box className={'midInputDiv'}>
  <Input className={'midInput'} border="none" placeholder='Search f  r Products..' colorScheme='black' color="#D9D9D9" backgroundColor="#D9D9D9" ></Input>

</Box>
<Box className={'midCategoriesDiv'}>

    <Box className={`${'midCategoriesCategoriNames'}`} >
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </Box>
    <Box className={`${'midCategoriesCategoriNames'}`} >
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </Box>
    <Box className={`${'midCategoriesCategoriNames'}`} >
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </Box>
    <Box className={`${'midCategoriesCategoriNames'}`} >
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </Box>


<Box className={'midCategories'}>
  <Box className={'svg'}>
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7492 10.5C11.3197 10.5 10.89 10.381 10.5627 10.143L0.491747 2.83078C-0.163916 2.35473 -0.163916 1.58352 0.491747 1.10747C1.14741 0.631414 2.20958 0.631414 2.86525 1.10747L11.7492 7.55989L20.6348 1.10842C21.2904 0.632366 22.3526 0.632366 23.0083 1.10842C23.6639 1.58447 23.6639 2.35568 23.0083 2.83173L12.9373 10.1439C12.6094 10.3819 12.1793 10.5 11.7492 10.5Z" fill="black"/>
</svg>
  </Box>
  <Box className={'categori'}>
  <Text fontFamily={`inter`}>Hello</Text>
  </Box>
  <Box className={'svg'}>
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7492 10.5C11.3197 10.5 10.89 10.381 10.5627 10.143L0.491747 2.83078C-0.163916 2.35473 -0.163916 1.58352 0.491747 1.10747C1.14741 0.631414 2.20958 0.631414 2.86525 1.10747L11.7492 7.55989L20.6348 1.10842C21.2904 0.632366 22.3526 0.632366 23.0083 1.10842C23.6639 1.58447 23.6639 2.35568 23.0083 2.83173L12.9373 10.1439C12.6094 10.3819 12.1793 10.5 11.7492 10.5Z" fill="black"/>
</svg>
  </Box> 
</Box>
</Box>


</Box>



  <Box className={'right'} >


  {user!="admin"?``: <Link to={`/admin`}><Button color={`orange`}>Admin</Button></Link>} 
  {
    
        basketContext.items.length>0 && <Link to="/basket">
          <Button colorScheme={`blue`} variant='outline'>Basket { basketContext.items.length}</Button>
        </Link>
      }
  {!authContext.loggedIn&&  <> 

  <Link to="/signin"> <Button colorScheme='blue'>Login</Button></Link>
  <Link to="/signup"> <Button colorScheme='blue'>Register</Button></Link>
     </>
     }
      
      {authContext.loggedIn && <> 
      

<Link to="/profile"> <Button colorScheme='cyan'>Profile</Button></Link>

   </>
   }
    

  </Box>
    </nav>
  )
}

export default Navbar