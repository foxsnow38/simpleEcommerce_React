import React from 'react'
import { Box,Image,Button } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import moment from 'moment'
import { useBasket } from '../../context/BasketContext'

function Card({item}) {
  const basketContext= useBasket()

  const findBasketItem = basketContext.items.find((i)=> i._id== item._id)


  return (
   <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

<Link to={`/product/${item._id}`}>
<Image src={item.photos[0]} alt={item.title}/>
<Box p="6">
    <Box display="flex" alignItems="baseline" >{moment(item.createdAt).format("DD/MM/YYYY")}</Box>
    <Box mt={`1`} fontWeight="semibold" as='h4' lineHeight={`shorter`}  alignItems="baseline" >{item.title}</Box>
    <Box display="flex"  alignItems="baseline" >{item.price}</Box>
</Box>
</Link>

<Button colorScheme={`pink`} onClick={()=>{basketContext.addToBasket(item,findBasketItem)}}>{!findBasketItem? `Add To Basket`:`Remove To  Basket`}</Button>

   </Box>
  )
}

export default Card