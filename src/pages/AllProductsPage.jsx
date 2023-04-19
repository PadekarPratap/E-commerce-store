import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { BASE_URL, fetchAPIData } from '../utils/api'
import {endpoints} from '../utils/endpoints'
import ProductCard from '../components/ProductCard'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'

const AllProductsPage = () => {
    const [allProduct, setAllProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getAllProducts = async () =>{
       try {
        const res = await axios.get(BASE_URL + endpoints.PRODUCT_DETAILS)
        // console.log(res)
        setAllProduct(res.data.data)
        setIsLoading(false)
       } catch (err) {
            console.log(err.message)
       }
    }

    useEffect(() =>{
        getAllProducts()
    })

    if(isLoading) {
        return (
            <div>
            <Navbar />
            <div className='text-center my-[2.5rem]'>
            <ClipLoader 
            color='#35d3b4'
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            </div>
            </div>
        )
    }

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