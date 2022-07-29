import axios from "axios"

export const  fetchProductList = async ({ pageParam=0}) =>{
    console.log(`page param: `+pageParam)
const {data} =await axios.get(`http://localhost:4000/product?page=${pageParam}`)
return data
} 

export const fetchProduct = async (id) =>{
    const {data} =await axios.get(`http://localhost:4000/product/${id}`)
return data
}
export const postProduct = async (input) =>{

    const options= {
        method:`POST`,
        url:`http://localhost:4000/product/`,
        headers:{
        Authorization: `${localStorage.getItem(`access-token`)}`
         },
        data:{...input,photos:JSON.stringify(input.photos)}
    }

    const {data} =await axios(options)
return data
}

export const fetchRegister= async (input) =>{

    const {data} =await axios.post(`http://localhost:4000/auth/register`,input)
return data
}

export const  fetchMe= async () =>{
 const options= {
method:`GET`,
url:`http://localhost:4000/auth/me`,
headers:{
Authorization: `${localStorage.getItem(`access-token`)}`
 },}

 

    const {data} =await axios(options)
  
    return data
}



export const  fetchLogout= async () =>{
 const options= {
method:`POST`,
url:`http://localhost:4000/auth/logout`,
headers:{
Authorization: `${localStorage.getItem(`access-token`)}`
 },
data:{refresh_token:`${localStorage.getItem(`refresh-token`)}`}}

 

    const {data} =await axios(options)
  
    return data
}

export const  fetchLogin= async (input) =>{
    const options= {
   method:`POST`,
   url:`http://localhost:4000/auth/login`,
   headers:{
   Authorization: `${localStorage.getItem(`access-token`)}`
    },
   data:input}
       const {data} =await axios(options)
       return data
   }

export const postOrder= async(input)=>{ 
    const options= {
        method:`POST`,
        url:`http://localhost:4000/order`,
        headers:{
        Authorization: `${localStorage.getItem(`access-token`)}`
         },
        data:input
    }
            const {data} =await axios(options)
            return data
}

export const fetchOrders= async ()=>{
    const options= {
        method:`GET`,
        url:`http://localhost:4000/order`,
        headers:{
        Authorization: `${localStorage.getItem(`access-token`)}`
         },
    
    }

            const {data} =await axios(options)
            return data

}
export const deleteProduct= async (productid)=>{
    const options= {
        method:`DELETE`,
        url:`http://localhost:4000/product/${productid}`,
        headers:{
        Authorization: `${localStorage.getItem(`access-token`)}`
         },
    }
            const {data} =await axios(options)
            return data
}

export const updateProduct = async (input,productid)=>{

    const options= {
        method:`PUT`,
        url:`http://localhost:4000/product/${productid}`,
        headers:{
        Authorization: `${localStorage.getItem(`access-token`)}`
         },
         data:input
    }
            const {data} =await axios(options)
            return data
}