import './reset.css'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';

import { ChakraProvider } from '@chakra-ui/react'
import Signin from './pages/Auth/Signin/index.js'
import Signup from './pages/Auth/Signup'
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { AuthProvider, useAuth } from './context/AuthContext';
import { BasketProvider } from './context/BasketContext';
import Profile from './pages/Profile';
// import { ReactQueryDevtools } from 'react-query-devtools'
import { ReactQueryDevtools } from 'react-query/devtools'
import ProtectedAdmin from './pages/ProtectedAdmin';
import ProtectedRoute  from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Admin from './pages/Admin';
import AdminHome from './pages/Admin/AdminHome';
import AdminOrders from './pages/Admin/AdminOrders';
import AdminProducts from './pages/Admin/AdminProducts';
const queryClient = new QueryClient()
function App() {





  return (
    <BasketProvider>
<AuthProvider>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>



    <BrowserRouter>
        <Navbar/>
            <div id='Content'>      
                    <Routes>
                      <Route path='/' element={<Products/>}> </Route>
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
