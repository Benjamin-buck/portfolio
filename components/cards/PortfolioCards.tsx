import Image from 'next/image'
import React from 'react'

interface Props {
  label: string;
  image: string;
  description: string;
}

const PortfolioCards = ({label, image, description}: Props) => {
  return (
    <div className='border border-gray-200 col-span-1  rounded-md overflow-hidden'>
      <Image src={image} width={500} height={300} className='w-full' alt='Project image'/>
      <div className='px-4 py-3'>
        <h2 className='text-xl font-semibold'>{label}</h2>
        <p className='text-gray-500'>{description}</p>
      </div>
      
    </div>
  )
}

export default PortfolioCards