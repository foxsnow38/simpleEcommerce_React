import { Text } from '@chakra-ui/react'
import { useQuery ,useMutation,useQueryClient} from 'react-query'
import React, { useMemo } from 'react'
import { deleteProduct, fetchProductList } from '../../../api'
import {Table,Popconfirm}from "antd"
import { Link } from 'react-router-dom'

function AdminProducts() {

const {isLoading,isError,data,err} =useQuery([`Admin`,`Products`],({ pageParam = 0 }) => fetchProductList({pageParam}))

const tableColumns =useMemo(()=>{
return  [
  {
    title:`Title`,
    dataIndex:`title`,
    key:`title`
  },
  {
    title:`Price`,
    dataIndex:`price`,
    key:`price`
  },
  {
    title:`Created At`,
    dataIndex:`createdAt`,
    key:`createdAt`
  },
  {
    title:`Action`,
    key:`action`,
    render:(text,record)=>(
      <>
      
      <Link to={`/admin/product/${record._id}`}>EDIT</Link>
      <Popconfirm
    
      title="Are you Sure"
      onConfirm={()=>{
        deleteMutation.mutate(record._id,{
          onSuccess:() =>{console.log(`Delete Success`)}
        })
      }}
  
      onCancel={()=>{}}
      okText="Yes"
      cancelText="Yesn't"
      placement='left'
      >
  <a href="#"   style={{marginLeft:`10px`}} >DELETE</a>
  
      </Popconfirm>
      </>
  
    )
  },
  ]

},[])
const deleteMutation = useMutation(deleteProduct,{
  refectQueries:[`Admin`,`Products`]
 })
 
 if(isLoading) return <div>Loading...</div>
if(isError) return <div>{err.message}</div>


  return (
    <>
    <Text fontSize={`2xl`}>PRODUCT</Text>

    <Table dataSource={data} columns={tableColumns } rowKey='_id' ></Table>
    </>
    
  )
}

export default AdminProducts