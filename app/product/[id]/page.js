'use client'
import ItemDetailContainer from '@/app/components/ui/ItemListContainer/ItemDetailContainer'
import { products } from '@/data/asyncMock'
import { useParams } from 'next/navigation'
import React from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  // const singleProduct = products.find(products = products.id == id)

  
    return (
    <div className='h-full'>
      <ItemDetailContainer />
    </div>  
  )
}

export default ProductDetail