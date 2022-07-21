import React from 'react'
import {Link}  from "react-router-dom";
import styles from './styles.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useAuth } from '../../context/AuthContext';
import { useBasket } from '../../context/BasketContext';




function Navbar() {
 const authContext = useAuth()
 const basketContext = useBasket()
 const user = authContext.user?.role
 console.log(user)


  return (
    <nav className={styles.nav}>
 
  <div className={styles.left}>
    <div className={styles.logo}>

    <Link to="/">Ecommerce</Link>
    </div>    

    <ul className={styles.menu}>
        <li>
            <Link to="/products">products</Link>
        </li>
    </ul>



    </div> 
  <div className={styles.right} >


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
    

  </div>
    </nav>
  )
}

export default Navbar