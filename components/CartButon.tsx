import React from 'react'
import { BiCartAdd } from 'react-icons/bi'

export const CartButon = () => {
    return (
        <div className='flex gap-1 cursor-pointer justify-center items-center m-auto w-[70%] h-10 border-gray-700 border text-black bg-white rounded-full relative -top-4'>
            <BiCartAdd className='text-2xl' />
            <p>Add to Cart</p>
        </div>
    )
}
