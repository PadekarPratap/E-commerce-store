import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { fetchAPIData } from '../utils/api'
import {endpoints} from '../utils/endpoints'
import ProductCard from '../components/ProductCard'

const AllProductsPage = () => {
    const [allProduct, setAllProduct] = useState([])
    const getAllProducts = async () =>{
        const res = await fetchAPIData(endpoints.PRODUCT_DETAILS)
        console.log(res)
        setAllProduct(res.data.data)
    }

    useEffect(() =>{
        getAllProducts()
    })
  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-5 my-[2.5rem]">
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    allProduct.map((product) => {
                        return (
                            <ProductCard key={product._id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default AllProductsPage