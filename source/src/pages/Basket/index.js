import React, { useEffect, useRef, useState } from 'react'
import { useBasket } from '../../context/BasketContext'
import { Link, Navigate } from 'react-router-dom'
import { Alert ,
  Image,
  Button,
  Text,
  Box, 
  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    Textarea} from '@chakra-ui/react'
import { postOrder } from '../../api'
function Basket() {
    const basketContext = useBasket()
    const [address,setAddress] = useState()


    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const handleSubmtit = async () =>{
   


      const  itemIds = basketContext.items.map(i=> i._id)
      const input ={address,items:JSON.stringify(itemIds)}
      const response = await postOrder(input)
   onClose()
    }
 

  
  return (
    <div>
{basketContext.items.length < 1 && <>
    <Alert>Have not product in basket </Alert>

       <Navigate to='/'/>

     </>}

     {basketContext.items.length >0 && <>
     <ul style={{listStyleType:`decimal`}}>





        {basketContext. items.map((items,key)=>(
<li key={items._id}>
<Link to={`/product/${items._id}`}>
{items.title} - {items.price}
</Link>
<Image htmlWidth={`200`} src={items.photos[0]} alt={items.title}/>
<Button onClick={()=> basketContext.addToBasket(items,true) } color='red' variant='outline'>DELETE {items.title}</Button>
</li>
        ))}
     </ul>  
     </>}


<br />
<br />
<br />
<br />
<br />
<hr />
<hr style={{border:`3px solid`,borderRadius:`5px`,color:`#53807d`}} />

<Box display={`flex`} justifyItems="center" alignItems='center' >
    <Box w={`50%`}><Text fontSize={`xl`} as="h3" color={`pink.500`}>Total Price: {basketContext.items.reduce((value,index)=>value= value +index.price ,0)} </Text></Box>
    <Box w={`50%`} display={`flex`} justifyItems="center" alignItems='center'  >
        <Button mt={`2`} size="sm" colorScheme={`green`} onClick={onOpen} >Ship To Order</Button> 
        
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>

              <FormLabel>Address</FormLabel>
           
        <Textarea ref={initialRef} value={address} onChange={(e) =>setAddress(e.target.value) } ></Textarea>


            </FormControl>

            
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmtit} colorScheme='blue' mr={3} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        
        
        
        
        </Box>


</Box>



<hr style={{border:`3px solid`,borderRadius:`5px`,color:`#53807d`}} />


    </div>
  )
}

export default Basket