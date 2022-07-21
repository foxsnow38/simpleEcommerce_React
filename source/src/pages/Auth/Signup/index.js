import React, { useEffect } from 'react'
import { Box,Image,Button,Flex,Heading,FormControl,FormLabel ,Text,Input,Alert} from '@chakra-ui/react'
import {useFormik} from "formik"
import validationsSchema from './validations'
import { fetchRegister } from '../../../api'
import { useAuth } from '../../../context/AuthContext'
import { fetchMe } from '../../../api'
import {Navigate} from "react-router-dom"



function Signup() {
  const authContext = useAuth()

const formik = useFormik({
initialValues:{
email:``,
password:``,
passwordConfirm:``,

},
validationsSchema,
onSubmit: async (values,err) =>{  
try{
  const registerResponse = await fetchRegister({
    email:values.email,
  password: values.password}) 

  authContext.login(registerResponse.user)
  localStorage.setItem(`access-token`,registerResponse.accessToken)
  localStorage.setItem(`refresh-token`,registerResponse.refreshToken)



}
catch(e){
  err.setErrors({general: e.response.data.message})
}


}


})

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

  return (
    
    <div>
  
  {authContext.loggedIn && <Navigate to={`/profile`}/>}

      <Flex align={`center`} w="full" justifyContent={`center`}>
<Box pt={`10`}>
  <Box textAlign={`center`}><Heading>Sign UP</Heading></Box>

  <Box my={`5`} textAlign={`left`} id="formBox" >

    <Box my={5}>
      {
formik.errors.general &&(
  <Alert status='error'>
    {formik.errors.general}
  </Alert>
)
      }
    </Box>

<form onSubmit={formik.handleSubmit}>
<FormControl>
<FormLabel >Email</FormLabel>
<Input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email }  isInvalid={formik.touched.email && formik.errors.email}  name='email'/>
</FormControl>

<FormControl mt={`4`}>
<FormLabel >Password</FormLabel>
<Input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password } isInvalid={formik.touched.password && formik.errors.password}  name='password' type={`password`}/>
</FormControl>

<FormControl mt={`4`}>
<FormLabel  >Password Confirm</FormLabel>
<Input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordConfirm } isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}  name='passwordConfirm' type={`password`}/>
 <Button mt={`4`} w={'full'} type="submit">
  Sign Up
 </Button>
</FormControl>
</form>

  </Box>
 </Box>
      </Flex>

  
    </div>
  )
}

export default Signup