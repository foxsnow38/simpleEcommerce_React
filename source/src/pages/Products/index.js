import React from 'react'
import Card from '../../components/Card'
import { Box, Button, Grid ,GridItem} from '@chakra-ui/react'
import { QueryClient, QueryClientProvider, useInfiniteQuery } from 'react-query'
import { fetchProductList } from '../../api'
import {addToBasket}from "../../context/BasketContext"

const queryClient = new QueryClient()
function Products() {

  // const {
  //   fetchNextPage,
  //   fetchPreviousPage,
  //   hasNextPage,
  //   hasPreviousPage,
  //   isFetchingNextPage,
  //   isFetchingPreviousPage,
  //   ...result
  // } = useInfiniteQuery(queryKey, ({ pageParam = 1 }) => fetchPage(pageParam), {
  //   ...options,
  //   getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
  //   getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  // })





  
    const {    data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetching,
      isFetchingNextPage,
      status } = useInfiniteQuery(['product'], ({ pageParam = 0 }) => fetchProductList({pageParam}), {
    
      getNextPageParam: (lastPage, allPages) => {
        const morePagesExist= (lastPage.length)>0

        if(!morePagesExist) return

        return allPages.length+1

      },
      getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    })
  



    if  (status === 'loading') return 'Loading...'
  
    if (status === 'error') return 'An error has occurred: ' +status

  return (
    <div>

    
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
    {/* {result.data.pages[0].map((item,key)=>(<Card key={key} item={item} />))} */}
{data.pages.map((group,index)=>
<React.Fragment key={index}>

{group.map((item,index)=>
(
<Box key={index} w={`100%`}>
<Card item={item}/>
</Box>

)

)}
</React.Fragment>
  

)}
</Grid>
<div style={{margin:`0 50%  `}}>
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          isLoading={status==`loading`}
          backgroundColor={`gray.`}

        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </Button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>


    </div>


  )
}

export default Products