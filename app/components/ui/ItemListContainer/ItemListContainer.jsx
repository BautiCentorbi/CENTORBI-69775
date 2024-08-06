'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getProducts, getProductsFiltered } from '@/data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { CircleLoader } from 'react-spinners'

const ItemListContainer = ({tittle}) => {
    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        const dataProducts = category ? getProductsFiltered(category) : getProducts()

        dataProducts
        .then((data) => { 
            setProducts(data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[category])

    return (
    <div className='min-h-[80vh] flex flex-col align-center items-center gap-8'>
        <div>
            <h2 className={'uppercase text-2xl md:text-5xl font-semibold'}>{tittle}</h2>
        </div>
        {
            loading 
            ? 
                <div className='flex flex-row align-center justify-center'>
                    <CircleLoader color='#9D066A'/>
                </div>
            :
                <ItemList products={products}/>
        }
    </div>
  )
}

export default ItemListContainer