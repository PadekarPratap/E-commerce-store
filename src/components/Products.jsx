import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    const catId = '2'
    const [products, setProducts] = useState([])
    const fetchProducts = async () =>{
        const res = await axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/products/cat/' + catId)
        console.log(res)
        setProducts(res.data.data)
    }
    useEffect(() =>{
        fetchProducts()
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