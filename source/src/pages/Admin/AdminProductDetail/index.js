import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProduct,updateProduct } from '../../../api'
import {useFormik} from 'formik'
import {Text,Box, FormControl, FormLabel, Input,Textarea, Button} from '@chakra-ui/react'
import validationShema from "./validations"
function  AdminProductDetails() {
  const {productid} = useParams()

  const  {isLoading,isErr,data,err} =useQuery([`Admin`,productid],() =>  fetchProduct(productid),{
    refetchOnWindowFocus:false})


    useEffect(()=>{
if (data!=undefined){
  
formik.setValues({title:data.title,
  description:data.description,
  price:data.price,
  photos:data.photos})
}

    },[data])  

const formikRemovePhotos = (index) =>{
let values = formik.values
 values.photos =  values.photos.splice(index,0)
 formik.setValues({...values})
}
const addPhotoIndex = () =>{

  let values = formik.values
  values.photos.push(` `)
  formik.setValues({...values})

}

  const formik = useFormik({
    initialValues:null,
    validationSchema:validationShema,
      onSubmit:(submitValues)=>updateProduct(submitValues,productid)
    }
   )
   if (isLoading) return(<div>Loading...</div>)

  if (isErr) return(<div>{err.mesage}</div>)

 if (data?.title!=undefined  && formik.values != null ) return (
  <>


  
  {console.log(formik.values)}
  {formik.values != null && 
    <div>
      <Text fontSize={"2xl"}>Edit </Text>
          <>
     
          <Box>
          <Box m={5} textAlign="left" >
          <form onSubmit={formik.handleSubmit}>
           
<FormControl>
<FormLabel>Title</FormLabel>
<Input name='title' onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.title}  disabled={formik.isSubmitting}/>
</FormControl>
<br /><br />
<FormControl>
<FormLabel>Description</FormLabel>
<Textarea  name='description' onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.description}  disabled={formik.isSubmitting}/>
</FormControl>
<br /><br />
<FormControl>
<FormLabel>Price</FormLabel>
<Input name='price' onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.price}  disabled={formik.isSubmitting}/>
</FormControl>
<br /><br />
<FormControl>
{formik.values.photos.length>0  && <FormLabel>Photos</FormLabel>}

 {formik.values.photos.map((item,index)=>(<Box display={"flex"} alignItems="center"  key={index}>
<Input type="text"  onChange={formik.handleChange}  value={item}  width={`70%`}   disabled={formik.isSubmitting} />
<Button marginLeft={`10px`} color={`red`} onClick={()=>formikRemovePhotos(index)} disabled={formik.isSubmitting} >Remove</Button>
</Box> ))} 

<Button mt={`10px`} color={"black"} onClick={addPhotoIndex} colorScheme={`pink`}  disabled={formik.isSubmitting} >Add a Photo</Button> 
</FormControl>
<Button mt={4} colorScheme={"green"} color="white" width="full" onSubmit={formik.handleSubmit} type='submit' isLoading={formik.isSubmitting}>Update</Button>
          </form>
          </Box>
          </Box>
          
          </>
     
  
    
    </div>}
  </>
  )
}

export default AdminProductDetails