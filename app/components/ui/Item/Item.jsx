import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProductsById, priceConverter } from '@/data/asyncMock'
import PrimaryButton from '../Buttons/PrimaryButton'

const Item = ({name,img,price,description,id}) => {
  return (
    <article className='max-w-xs bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900'>
        <div className="p-5">
            <div className='mb-8 flex justify-center'>
                <Image 
                  src={img}
                  width={144}
                  height={144}
                  style={{maxHeight:'144px',width:'auto'}}
                  alt={name}
                />
            </div>
            <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-ourpink-dark">{name}</h5>
            </Link>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
            <p className='mb-3 text-2xl md:text-3xl font-semibold text-ourpink-light dark:text-white'>{priceConverter(price)}</p>
            <PrimaryButton label={'Ver Detalle'} link={`/product/${id}`}/>
        </div>
    </article>
  )
}

export default Item