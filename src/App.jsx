import React from 'react'
import Homepage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/cat/:catId' element={<ProductsPage />} />
        <Route path='/products/details/:_id' element={<ProductDetailsPage />}  />
      </Routes>
    </div>
  )
}

export default App