import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useQuery } from 'react-query'
import { fetchProduct } from '../../api'
import { Box,Text,Button } from '@chakra-ui/react'  

import moment from 'moment'
import ImageGallery from 'react-image-gallery';
import { useBasket } from '../../context/BasketContext'
function ProductDetail() {
  const basketContext = useBasket()
   const param=  useParams()
   const [findBasketItem,setFindBasketItem] =useState(null)
const  {isLoading,isErr,data}  =useQuery([`product`, param.product_id], ()=>fetchProduct(param.product_id))
 
useEffect(()=>{
  if(!isLoading) setFindBasketItem(basketContext.items.find((i)=> i._id== data._id))

},[])
useEffect(()=>{
  if(!isLoading) setFindBasketItem(basketContext.items.find((i)=> i._id== data._id))

},[data])

if(isLoading){ return <Text as={`h2`}>IsLoading</Text>}

 if(!isLoading && findBasketItem!= null  && data!= undefined) return (
    <Box>
<Button colorScheme={`pink`} onClick={()=>basketContext.addToBasket(data,findBasketItem)}>{!findBasketItem? `Add To Basket`:`Remove To  Basket`}</Button>
<Text as={`h2`} fontSize={`2xl`}>{data.title}</Text>
<Text as={`h2`} >{moment(data.createdAt).format(`DD/MM/YYYY`)}</Text>
<p>{data.description}</p>

<Box margin={`10`}>
<ImageGallery items={[{
    original: `${data.photos[0]}`,
    thumbnail:  `${data.photos[1]?data.photos[1]:data.photos[0]}`,
  },]}/>
</Box>

 

    </Box>
  )
}

export default ProductDetail