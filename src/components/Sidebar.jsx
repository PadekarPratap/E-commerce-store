import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchAPIData } from '../utils/api'
import { endpoints } from '../utils/endpoints'
import { useNavigate, useParams } from 'react-router-dom'

const Sidebar = () => {
  const {catId} = useParams()
  console.log(useParams())
  const [subCategories, setSubCategories] = useState([])

  const getSubCategories = async () => {
    const res = await fetchAPIData(endpoints.SUBCATEGORIES_URL + catId)
    setSubCategories(res.data.data)
  }

  useEffect(() =>{
    getSubCategories()
  }, [])

  const navigate = useNavigate()
  return (
    <div className='sm:col-span-3'>
        <div className='sticky top-[5rem] border-2 rounded-md border-black p-4'>
        {
          subCategories.map(subCategory => {
            return <div key={subCategory.subId} className='border-b-2 mb-4 border-gray-950 text-center'>
              <span>{subCategory.subName}</span>
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Sidebar