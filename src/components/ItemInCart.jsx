import React, { useState } from 'react'
import { IMAGE_URL } from '../utils/api'
import {HiOutlineTrash} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from '../redux/slices/cartSlice'

const ItemInCart = ({cartItem}) => {
    const dispatch = useDispatch()

    const totalPrice = () =>{
        return Math.ceil(cartItem.quantity * cartItem.price)
    }

  return (
    <div className='my-5 flex gap-[3rem] flex-col sm:flex-row'>
        <div className='self-center sm:self-stretch'>
            <img className='w-[350px] h-[300px] rounded-lg' src={IMAGE_URL + cartItem.image} alt={cartItem.productName} />
        </div>
        <div className='self-center sm:self-stretch'>
            <h3 className='text-xl'>{cartItem.productName}</h3>
            <div className='mt-5'>
            <button onClick={() => dispatch(DECREASE_QUANTITY(cartItem))} className='bg-gray-100 px-3 py-1 rounded-lg text-black font-bold'>-</button>
            <div className='inline mx-5'>{cartItem.quantity}</div>
            <button onClick={() => dispatch(INCREASE_QUANTITY(cartItem))} className='bg-gray-100 px-3 py-1 rounded-lg text-black font-bold'>+</button>
            <div className='lg:inline ml-5 hidden'>
                <button onClick={() => dispatch(REMOVE_FROM_CART(cartItem))} className='px-3 py-3 bg-red-500 text-white rounded-lg'><HiOutlineTrash size={20} /></button>
            </div>
            <div className='block lg:hidden mt-5'>
                <button onClick={() => dispatch(REMOVE_FROM_CART(cartItem))} className='px-3 py-3 bg-red-500 text-white rounded-lg'><HiOutlineTrash size={20} /></button>
            </div>
            </div>
            <div className='mt-5'>
                <p className='text-lg font-medium'>Product Price: &#8377; {cartItem.price}</p>
            </div>
        </div>
        <div className='sm:ml-auto self-center sm:self-stretch'>
            <p className='text-2xl font-bold font-mono'>&#8377;{totalPrice()}</p>
        </div>
    </div>
  )
}

export default ItemInCart