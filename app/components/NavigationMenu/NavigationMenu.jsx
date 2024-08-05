import React from 'react'
import { products } from '@/data/asyncMock'

function totalCategories (data) {
    const categories = data.map(item => item.category)
    return[...new Set(categories)]
}

const NavigationMenu = () => {
    const categories = totalCategories(products)

    return (
    <div className=''>
        <ul></ul>
    </div>
  )
}

export default NavigationMenu