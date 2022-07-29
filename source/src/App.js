import './reset.css'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import 'antd/dist/antd.css';
import { ChakraProvider } from '@chakra-ui/react'
import Signin from './pages/Auth/Signin/index.js'
import Signup from './pages/Auth/Signup'

import ProductDetail from './pages/ProductDetail';
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/AuthContext';
import { BasketProvider } from './context/BasketContext';
import Profile from './pages/Profile';
import { ReactQueryDevtools } from 'react-query/devtools'
import ProtectedAdmin from './pages/ProtectedAdmin';
import ProtectedRoute  from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Admin from './pages/Admin';
import AdminHome from './pages/Admin/AdminHome';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminProductDetails from './pages/Admin/AdminProductDetail';
import AdminNewProduct from './pages/Admin/AdminNewProduct';
import NewProduct from './pages/newProductPage';
import Navbar2 from './components/Navbar2';
import Main from './pages/Main';

import { useEffect } from 'react';
import Products from './pages/Products';
// import { ReactQueryDevtools } from 'react-query-devtools'
// import Navbar from './components/Navbar';
const queryClient = new QueryClient()
function App() {




  return (
    <BasketProvider>
<AuthProvider>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>


    <BrowserRouter>
 
    <Navbar2/>
            <div id='Content'>      
                    <Routes>
                  

                    <Route path='/' element={<Main/>}> </Route>
                      <Route path='/product' element={<NewProduct/>}> </Route>
                      {/* <Route path='/' element={<Products/>}> </Route> */}
                      {/* <Route path='/navbar' element={<Navbar2/>}> </Route> */}
                      <Route path='/product/:product_id' element={<ProductDetail/>}> </Route>
                      <Route path='/signin' element={<Signin/>}> </Route>
                        <Route path='/signup' element={<Signup/>}> </Route>
                        <Route path='/basket' element={<Basket/>}> </Route>
                        <Route element={<ProtectedRoute/>}>
                      <Route  path='/profile' element={<Profile/>}/>   
                      
                      
                      <Route element={<ProtectedAdmin/>}>
                                    <Route path='/admin' element={<Admin/>}/> 
                                    <Route path='/admin/home' element={<AdminHome/>}/>
                                    <Route path='/admin/order' element={<AdminOrders/>}/>
                                    <Route path='/admin/product' element={<AdminProducts/>}/>
                                    <Route path='/admin/new' element={<AdminNewProduct/>}/>
                                    <Route path='/admin/product/:productid' element={<AdminProductDetails/>}/>
                                  
                                   
                                   
                      </Route>
                      </Route>
                    </Routes>
          </div>

      </BrowserRouter>
  </ChakraProvider>

  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  </AuthProvider>
  </BasketProvider>
  );
}

export default App;
