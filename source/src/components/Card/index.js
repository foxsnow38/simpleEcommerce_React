// import React from 'react'
// import { Box,Image,Button } from '@chakra-ui/react'
// import {Link} from "react-router-dom"
// import moment from 'moment'
// import { useBasket } from '../../context/BasketContext'

// function Card({item}) {
//   const basketContext= useBasket()

//   const findBasketItem = basketContext.items.find((i)=> i._id== item._id)


//   return (
//    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" border={`1px solid purple`} p="3">

// <Link to={`/product/${item._id}`}>
// <Image src={item.photos[0]} alt={item.title}/>
// <Box p="6">
//     <Box display="flex" alignItems="baseline" >{moment(item.createdAt).format("DD/MM/YYYY")}</Box>
//     <Box mt={`1`} fontWeight="semibold" as='h4' lineHeight={`shorter`}  alignItems="baseline" >{item.title}</Box>
//     <Box display="flex"  alignItems="baseline" >{item.price}</Box>
// </Box>
// </Link>

// <Button colorScheme={`pink`} variant="outline" onClick={()=>{basketContext.addToBasket(item,findBasketItem)}}>{!findBasketItem? `Add To Basket`:`Remove To  Basket`}</Button>

//    </Box>
//   )
// }

// export default Card

// const photos = [{title:"photo1",url:"google.com"},{title:"photo1",url:"google.com"},{title:"photo1",url:"google.com"},]




import React from 'react'
import { Box,Image,Button } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import moment from 'moment'
import { useBasket } from '../../context/BasketContext'
import styles from "./style.module.css"
import "./style.module.css"
function Card({item}) {
  const basketContext= useBasket()

  const findBasketItem = basketContext.items.find((i)=> i._id== item._id)
  const btnOnClick =(e) =>{
    e.target.blur()
    basketContext.addToBasket(item,findBasketItem)
console.log(item)
  }


  return (
   <Box borderWidth="1px"  borderRadius="lg" name="card" overflow="hidden"
   className={`cardBox`}  p="3" paddingTop={`0`} paddingRight={`0`} paddingLeft={`0`}>

<Link to={`/product/${item._id}`}>
<Image src={item.photos[0]} alt={item.title} p={`0`}  borderTopRadius="10px"/>
<Box p="6"  >
  <Box w={`100%`} fontFamily={"inter"} fontWeight={`regular`} fontSize={`36`} >
  <Box display="flex" alignItems="baseline" >{item.title}</Box>
  </Box >
   <Box w={`100%`} fontFamily={"inter"} fontWeight={`light`} fontSize={`24`}  >
   <Box mt={`1`} fontWeight="semibold" as='h4' lineHeight={`shorter`}  alignItems="baseline" >{`$`+item.price}</Box>
   </Box>
    
</Box>
</Link>
<Box display={`flex`} name="downSize">
<Box display="flex" w={`100%`} paddingLeft="6" fontFamily={"inter"} fontWeight={`light`} fontSize={`16`}  alignItems="baseline" >{item.description.slice(0,100)}
</Box>
{/* <Button colorScheme={`pink`}   variant="outline" onClick={()=>{basketContext.addToBasket(item,findBasketItem)}}>{!findBasketItem? `Add To Basket`:`Remove To  Basket`}</Button> */}
<Box w={`50%`}  display="inline" name="Addbtn"  fontFamily={"inter"} fontWeight={`medium`} fontSize={`16`} >
<button style={{marginRight:`10px`}}  className={styles.offset}  onClick={(e)=>btnOnClick(e)}   >{!findBasketItem? `Add To Basket`:`Remove To  Basket`}</button>
</Box>

</Box>



   </Box>
  )
}

export default Card

const photos = [{title:"photo1",url:"google.com"},{title:"photo1",url:"google.com"},{title:"photo1",url:"google.com"},]