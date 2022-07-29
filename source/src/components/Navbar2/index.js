import React, { useEffect, useRef, useState } from 'react'
import {Link}  from "react-router-dom";

import { Button, ButtonGroup ,Text,Box, Input} from '@chakra-ui/react'
import { useAuth } from '../../context/AuthContext';
import { useBasket } from '../../context/BasketContext';
import "./navmenu2.scss"






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
if (status){ 
  //  checkRef.current.focus()
  setStatus(false)}
if (!status) setStatus(true)

// console.log(status)
 }

 useEffect(()=>{


let list = Object.values(document.querySelectorAll(`.midCategoriesCategoriNames`))






  list.map((item,index) =>{
    setTimeout(() => {
    
      
let  classlist =item.className
classlist= classlist.split(` `)

if(classlist.indexOf(`active`)!=-1){
  
let index  = classlist.indexOf(`active`)

classlist= classlist.splice(index-1,1)

classlist.push(`passive`)

classlist =  classlist.join(` `)


return item.className= classlist

}

if(classlist.indexOf(`active`)==-1){
  
  let index  = classlist.indexOf(`passive`)
  
  classlist= classlist.splice(index-1,1)
  
  classlist.push(`active`)

  classlist =  classlist.join(` `)
  
  return item.className= classlist
  }
    }, 50*index);

    list.map((item,index)=>{
      if(status){ 
        let opacity =0
        const interval = setInterval(() => {
          opacity = opacity+100
          if(opacity>=100) clearInterval(interval)
        }, 100);
         }
        
         if(!status){ 
          let opacity =1000
          const interval = setInterval(() => {
            opacity = opacity-100
            if(opacity<=0) clearInterval(interval)
          }, 100);
      }
        
        }
     
    
    )

if (status) {
  const svgList = Object.values( document.querySelectorAll(`.AccordionSvg`))
  svgList.map((item,index) =>{
item.style.transform =`rotate(180deg)`
  })
}
if (!status) {
  const svgList = Object.values( document.querySelectorAll(`.AccordionSvg`))
  svgList.map((item,index) =>{
item.style.transform =`rotate(0deg)`
  })
}


  } )






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
<Box className={'midCategoriesDiv'}    tabIndex={`0`}>
<ul>
    <div className={`midCategoriesCategoriNames passive`} style={{justifyContent:`center`,textDecoration:`none`}} >
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </div>

    <div className={`midCategoriesCategoriNames passive`} style={{justifyContent:`center`,textDecoration:`none`}}>
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </div>

    <div className={`midCategoriesCategoriNames passive`} style={{justifyContent:`center`,textDecoration:`none`}}>
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </div>

    <div className={`midCategoriesCategoriNames passive`} style={{justifyContent:`center`,textDecoration:`none`}}>
    <Button variant='ghost' colorScheme={"black"}  border={'none'}>Hello</Button>
    </div>
    </ul>

<Box className={'midCategories'}  onClick={BtnOnOFf} >
  {/* <Box position={`absolute`} top={`0`} left={`0`}/> */}
  
  <Box className={'AccordionSvg'} display={"flex"}>
  <svg width="24" height="11" viewBox="0 0 24 11" fill="none"  xmlns="http://www.w3.org/2000/svg">
<path d="M11.7492 10.5C11.3197 10.5 10.89 10.381 10.5627 10.143L0.491747 2.83078C-0.163916 2.35473 -0.163916 1.58352 0.491747 1.10747C1.14741 0.631414 2.20958 0.631414 2.86525 1.10747L11.7492 7.55989L20.6348 1.10842C21.2904 0.632366 22.3526 0.632366 23.0083 1.10842C23.6639 1.58447 23.6639 2.35568 23.0083 2.83173L12.9373 10.1439C12.6094 10.3819 12.1793 10.5 11.7492 10.5Z" fill="black"/>
</svg>
  </Box>
  <Box className={'categori'} display={`flex`}  flex={`1`} >
  <Text  ref={checkRef}  
   w={`100%`} display={`flex`}  textAlign={`center`} alignItems={`center`} justifyContent={`center`}
   fontFamily={`inter`}   fontWeight={`bold`}  height={`100%`} className={`categoriText`} 
  tabIndex={`1`} >{status?`Close`:`All Categories`}</Text >
  </Box>

  <Box className={'AccordionSvg'} display={"flex"}>

  <svg width="24" height="11" viewBox="0 0 24 11"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7492 10.5C11.3197 10.5 10.89 10.381 10.5627 10.143L0.491747 2.83078C-0.163916 2.35473 -0.163916 1.58352 0.491747 1.10747C1.14741 0.631414 2.20958 0.631414 2.86525 1.10747L11.7492 7.55989L20.6348 1.10842C21.2904 0.632366 22.3526 0.632366 23.0083 1.10842C23.6639 1.58447 23.6639 2.35568 23.0083 2.83173L12.9373 10.1439C12.6094 10.3819 12.1793 10.5 11.7492 10.5Z" fill="black"/>
</svg>
  </Box> 
</Box>
</Box>


</Box>



  <Box className={'right'} >


  {user!="admin"?``: <Link to={`/admin`}><button className={`offset`}>Admin</button></Link>} 
  {
    
        basketContext.items.length>0 && <Link to="/basket">
          <button className={`offset navBtn`}>Basket { basketContext.items.length}</button>
        </Link>
      }
  {!authContext.loggedIn&&  <> 

  <Link to="/signin"> <button className={`offset navBtn`}>Login</button></Link>
  <Link to="/signup"> <button className={`offset navBtn`}>Register</button></Link>
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