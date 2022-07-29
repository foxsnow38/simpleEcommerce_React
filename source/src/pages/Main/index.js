import React, { useEffect, useState } from 'react'
import { Grid,Box, Button} from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query/react';
import AwesomeSlider from 'react-awesome-slider';

import "./style.css"

import Card2 from '../../components/CardMain';
import { fetchMe, fetchProductList } from '../../api';
import { useAuth } from '../../context/AuthContext';

const images = [
    { url: "https://avatars.mds.yandex.net/i?id=b9a95f8db0905e0a2f3955b5e2609976-5338246-images-thumbs&n=13&exp=1" },
    { url: "https://avatars.mds.yandex.net/i?id=23517f522879d0440d9a51a8bfe97b06-5886141-images-thumbs&n=13&exp=1" },
  
  ];




function Main() {



  const authContext= useAuth()

  useEffect(()=>{
    (async ()=>{
      try{
        authContext.setLoading(true)
        const me = await fetchMe()
        authContext.setLoggedIn(true)
        authContext.setUser(me)
    
      }
        catch(e){
          console.log(e)
        }
    
        authContext.setLoading(false)
        console.log(authContext.loading)
        
    })()
  
  },[])
    
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
  <Card2 item={item}/>
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

export default Main