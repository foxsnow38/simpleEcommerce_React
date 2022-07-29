import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProduct,postProduct,updateProduct } from '../../../api'
import {useFormik} from 'formik'
import {Text,Box, FormControl, FormLabel, Input,Textarea, Button} from '@chakra-ui/react'
import validationShema from "./validations"
function  AdminNewProduct() {





const formikRemovePhotos = (index) =>{
let values = formik.values
 values.photos =  values.photos.splice(index,0)
 formik.setValues({...values})
}
const addPhotoIndex = () =>{

  let values = formik.values
  values.photos.push(" ")
  formik.setValues({...values})

}
const photosLinkChange = (item,index) =>{


  let values = formik.values
  values.photos[index] = item
  formik.setValues({...values})
}

  const formik = useFormik({
    initialValues:{title:` `,
    description:` `,
    price:` `,
    photos:[]},
    validationSchema:validationShema,
      onSubmit:(e)=>postProduct(e)
    }
   )


  return (
  <>


  
  {console.log(formik.values)}
  {formik.values != null && 
    <div>
      <Text fontSize={"2xl"}>New Product </Text>
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
<FormLabel>Photos</FormLabel>

 {formik.values.photos.map((item,index)=>(<Box display={"flex"} alignItems="center"  key={index}>
<Input type="text"  onChange={(e)=> photosLinkChange(e.target.value,index)}  value={item}   width={`70%`}   disabled={formik.isSubmitting} />
<Button marginLeft={`10px`} color={`red`} onClick={()=>formikRemovePhotos(index)} disabled={formik.isSubmitting} >Remove</Button>
</Box> ))} 

<Button mt={`10px`} color={"black"} onClick={addPhotoIndex} colorScheme={`pink`}  disabled={formik.isSubmitting} >Add a Photo</Button> 
</FormControl>
<Button mt={4} colorScheme={"green"} color="white" width="full" onSubmit={formik.handleSubmit} type='submit' isLoading={formik.isSubmitting}>Save</Button>
          </form>
          </Box>
          </Box>
          
          </>
     
  
    
    </div>}
  </>
  )
}

export default AdminNewProduct