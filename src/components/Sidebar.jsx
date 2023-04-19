import React, { useEffect, useState } from 'react'
import { fetchAPIData } from '../utils/api'
import { endpoints } from '../utils/endpoints'
import { useParams } from 'react-router-dom'
import RingLoader from "react-spinners/RingLoader";


const Sidebar = () => {
  const {catId} = useParams()
  // console.log(useParams())
  const [subCategories, setSubCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getSubCategories = async () => {
      try {
        const res = await fetchAPIData(endpoints.SUBCATEGORIES_URL + catId)
        setSubCategories(res.data.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err.message)
      }
  }
  
  useEffect(() =>{
    getSubCategories()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(isLoading) {
    return (
      <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        <RingLoader 
          color='#35d3b4'
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          
        />
      </div>
    )
  }

  return (
    <div className='sm:col-span-3'>
        <div className='sticky top-[5rem] border rounded-md border-black p-4'>
          <div className='text-center mb-6'>
            <h4 className='text-2xl sm:hidden lg:block font-bold before-bar relative'>Subcategory</h4>
          </div>
        {
          subCategories.map(subCategory => {
            return <div key={subCategory.subId} className='border-b mb-4 border-gray-950 text-center'>
              <span>{subCategory.subName}</span>
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Sidebar