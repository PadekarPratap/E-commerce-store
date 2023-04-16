import React from 'react'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/cat/:catId' element={<ProductsPage />} />
        <Route path='/products/details/:_id' element={<ProductDetailsPage />}  />
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/contact' element={<ContactsPage />}  />
      </Routes>
    </div>
  )
}

export default App