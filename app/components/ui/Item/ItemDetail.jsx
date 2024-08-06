import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { priceConverter } from '@/data/asyncMock'
import PrimaryButton from '../Buttons/PrimaryButton'
import StockCounter from '../../Counter/StockCounter'

const ItemDetail = ({name,img,price,lgDescription,id, stock }) => {
    const [ cantidad, setCantidad ] = useState(0)
    
    const onAdd = (quantity) => {
        const item = {
            id,
            name,
            price,
            img,
            stock
        }
        addItem(item,quantity)
        setCantidad(quantity)
    }

    return (
    <article className='max-w-xs md:max-w-6xl bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900'>
        <div className="flex flex-col md:flex-row">
            <div className='pt-8 md:pl-16 flex justify-center items-center'>
                <Image 
                  src={img}
                  width={144}
                  height={144}
                  style={{maxHeight:'644px',maxWidth:'644px'}}
                  alt={name}
                />
            </div>
            <div className='p-8 md:p-16'>
                <Link href="#">
                    <h1 className="mb-2 text-2xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-ourpink-dark">{name}</h1>
                </Link>
                <p className='mb-3 text-gray-700 dark:text-gray-400'>{lgDescription}</p>
                <p className='mb-3 text-3xl md:text-5xl font-semibold text-ourpink-light dark:text-white'>{priceConverter(price)}</p>
                <StockCounter stock={stock} initialValue={1} onAdd={onAdd}/>
            </div>
        </div>
    </article>
  )
}

export default ItemDetail