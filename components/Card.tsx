import React from 'react'
import Image from 'next/image';
import { CartButon } from '@/components/CartButon'

import baklva from "/public/assets/images/image-baklava-desktop.jpg"

export const Card = () => {
    return (
        <div className='w-full row-span-1 p-7'   >
            <Image src={baklva} width={100} height={100} className='w-full h-auto rounded-lg' alt="Just a Image" />
            <CartButon />
            <div>
                <p className='text-sm text-slate-500 font-extralight'>Waffle</p>
                <h4>Waffle with Berries</h4>
                <h5 className='text-red-400 text-sm'>$6.50</h5>
            </div>
        </div>
    )
}
