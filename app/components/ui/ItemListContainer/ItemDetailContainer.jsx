'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { CircleLoader } from 'react-spinners'
import { getProductsById } from '@/data/asyncMock'
import ItemDetail from '../Item/ItemDetail'

const ItemDetailContainer = () => {
  const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const { id } = useParams()

    useEffect(() => {
        getProductsById(id)
        .then((data) => setProduct(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id])
    console.log(product)

    return (
    <div className='flex items-center justify-center w-full h-full'>
        {
            loading ?
            <div className='flex flex-row justify-center items-center h-[60vh'>
                <CircleLoader color='#9D066A'/>
            </div>
            :
            <ItemDetail {...product}/>
        }
    </div>
  )
}

export default ItemDetailContainer