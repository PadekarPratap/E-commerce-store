import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { BASE_URL, fetchAPIData } from '../utils/api'
import { endpoints } from '../utils/endpoints'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    const {catId} = useParams()
    const [products, setProducts] = useState([])
    const getProducts = async () =>{
        try {
            const res = await axios.get(BASE_URL + endpoints.CATEGORIES_PRODUCTS_URL + catId)
            setProducts(res.data.data)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() =>{
        getProducts()
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className='sm:col-span-9'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.map(product =>{
                    return <ProductCard product={product} key={crypto.randomUUID()} />
                })
            }
        </div>
    </div>
  )
}

export default Products