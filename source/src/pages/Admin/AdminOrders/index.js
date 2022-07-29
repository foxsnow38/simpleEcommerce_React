import React from 'react'
import {  useQuery } from 'react-query'
import { fetchOrders } from '../../../api'
import { Table,Thead,Tbody,Th,Tr,Td,TableCaption,Text } from '@chakra-ui/react'

function AdminOrders() {

const {isloading,iserr,data,err} =useQuery([`Admin`,`Orders`], fetchOrders)
if (isloading) return (<div>Loading</div>)
if (iserr) return (<div>Err : {err.message}</div>)

console.log(`this is data `,data)
  return (
    <div>
<Text fontSize="2xl" p={5}>
Orders
</Text>

<Table variant={`simple`}>
    <TableCaption>Hello FROM INDIA MY FRIEND</TableCaption>

<Thead>
    <Tr>
        <Th>User</Th>
        <Th>Address</Th>
        <Th>Items</Th>
    </Tr>
    </Thead>
    <Tbody>
        {/* <Tr>
           <Td>
           Hello
           </Td>
        </Tr> */}
        
         {data.map(item=>(
            <Tr key={item._id}>
                <Td>{item.user.email}</Td>
                <Td>{item.adress}</Td>
                <Td>{item.items.length}</Td>

            </Tr>
        ))} 
    </Tbody>

</Table>
    </div>
  )
}

export default AdminOrders