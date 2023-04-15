import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
  const catId = '4'
  const [subCategories, setSubCategories] = useState([])

  const fetchSubCategories = async () =>{
      const res = await axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/subcategory/' + catId)
      console.log(res)
      setSubCategories(res.data.data)
  }

  useEffect(() =>{
    fetchSubCategories()
  }, [])

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