import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const fetchCategories = async () =>{
        const res = await axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/category')
        console.log(res)
        setCategories(res.data.data)

    }
    useEffect(() =>{
        fetchCategories()
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