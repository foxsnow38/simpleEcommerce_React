import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import styles from "./style.module.css"
import AdminHome from './AdminHome'
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'

function Admin() {
  return (


    <div>Admin

<nav>
<ul className={styles.adminmenu}>

<li>
    <Link to={`/admin/home`}>Home </Link>
</li>
<li>
    <Link to={`/admin/order`}>Orders </Link>
</li>
<li>
    <Link to={`/admin/product`}>Products </Link>
</li>

</ul>
</nav>
<Box mt="10">

</Box>



</div>
  )
}

export default Admin