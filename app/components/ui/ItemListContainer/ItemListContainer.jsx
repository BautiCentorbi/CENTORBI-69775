'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getProducts, getProductsFiltered } from '@/data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { CircleLoader } from 'react-spinners'
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ weight: '400', subsets: ['latin'] })

const ItemListContainer = ({tittle}) => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    const { categoryId } = useParams()

    console.log(categoryId)

    useEffect(() => {
        setLoading(true)
        const dataProducts = categoryId ? getProductsFiltered(categoryId) : getProducts()

        dataProducts
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[categoryId])

    return (
    <div className='min-h-[80vh] flex flex-col align-center justify-center items-center gap-8'>
        <div className={permanentMarker.className}>
            <h2 className={'uppercase text-3xl md:text-5xl font-Permanent_Marker'}>{tittle}</h2>
        </div>
        {
            loading 
            ? 
                <div className='flex flex-row align-center justify-center'>
                    <CircleLoader color='#ffffff'/>
                </div>
            :
                <ItemList products={products}/>
        }
    </div>
  )
}

export default ItemListContainer