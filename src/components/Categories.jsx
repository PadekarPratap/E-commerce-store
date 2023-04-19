import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { fetchAPIData } from '../utils/api'
import { endpoints } from '../utils/endpoints'
import ClipLoader from "react-spinners/ClipLoader";

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getCategories =  () =>{
        fetchAPIData(endpoints.CATEGORIES_URL) 
            .then((res) => {
                // console.log(res)
                setCategories(res.data.data)
                setIsLoading(false)
            })
            .catch(err => alert(err.message))
            
    }
    useEffect(() =>{
        getCategories()
    }, [])

    if(isLoading){
        return (
            <div className='text-center my-[5rem]'>
            <ClipLoader
            color='#35d3b4'
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
            </div>
        )
    }

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