import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { fetchAPIData } from '../utils/api'
import { endpoints } from '../utils/endpoints'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const getCategories = () =>{
        fetchAPIData(endpoints.CATEGORIES_URL)
            .then((res) => setCategories(res.data.data))
    }
    useEffect(() =>{
        getCategories()
    }, [])
  return (
    <div className='container mx-auto px-5 mt-12 mb-10'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                categories.map((category) => {
                    return <CategoryCard key={category.catId} category={category} />
                })
            }
        </div>  
    </div>
  )
}

export default Categories