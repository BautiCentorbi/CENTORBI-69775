'use client'
import ItemDetailContainer from '@/app/components/ui/ItemListContainer/ItemDetailContainer'
import { useParams } from 'next/navigation'
import React from 'react'

const ProductDetail = () => {
  const { id } = useParams()  
    return (
    <div className='h-full'>
      <ItemDetailContainer />
    </div>  
  )
}

export default ProductDetail