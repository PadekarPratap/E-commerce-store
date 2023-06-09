import React from 'react'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import AllProductsPage from './pages/AllProductsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { Toaster } from 'react-hot-toast'
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/products/cat/:catId' element={<ProductsPage />} />
        <Route path='/products/details/:_id' element={<ProductDetailsPage />}  />
        <Route path='/products/' element={<AllProductsPage />}  /> */}
        {/* Nested routes -> */}
        <Route path='/products'>
            <Route index element={<AllProductsPage />} />
            <Route path='details/:_id' element={<ProductDetailsPage />} />
            <Route path='cat/:catId' element={<ProductsPage />} />
        </Route>
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/contact' element={<ContactsPage />}  />
        <Route path='/register' element={<RegisterPage />}  />
        <Route path='/login' element={<LoginPage />}  />
        <Route path='/cart' element={<CartPage />}  />
      </Routes>
      <Toaster position='bottom-right' />
    </div>
  )
}

export default App