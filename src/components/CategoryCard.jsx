import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({category}) => {
    const {catImage, catName, catId} = category

    const navigate = useNavigate()

  return (
    <div className='shadow-2xl shadow-black/30 rounded-lg'>
        {/* card image  */}
        <div>
            <img className='w-full h-[250px] lg:h-[200px] rounded-t-lg' src={"http://rjtmobile.com/grocery/images/" + catImage} alt={catName} />
        </div>

        {/* card name and desc(if any)  */}
        <div className='text-center p-4'>
            <h3 className='text-center tracking-widest uppercase mb-4'>{catName}</h3>
            <button onClick={() => navigate('/product/cat/' + catId )} className='bg-black text-white px-4 py-1'>VIEW</button>
        </div>
    </div>
  )
}

export default CategoryCard