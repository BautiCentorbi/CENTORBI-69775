'use client'
import React from 'react'
import Link from 'next/link'
import { products } from '@/data/asyncMock'
import { usePathname } from 'next/navigation'

function totalCategories (data) {
    const categories = data.map(item => item.category)
    return[...new Set(categories)]
}

const NavigationMenu = () => {
    const categories = totalCategories(products)

    const pathname = usePathname()

    return (
    <div className='mt-4 mb-8'>
        <ul className='flex flex-row gap-8 px-16 py-4 border-2 border-slate-800 rounded-full'>
            <li className={`text-white uppercase px-4 py-1 rounded-lg ${pathname === '/products' ? 'bg-ourpink-light text-white' : ''}`}>
                <Link href={'/products'}>
                    Todos
                </Link>
            </li>
            {categories.map((category, index) => {
                const categoryPath = `/products/${category.toLowerCase()}`
                return (
                    <li key={index} className={`text-white uppercase px-4 py-1 rounded-lg ${pathname ===categoryPath ? 'bg-ourpink-light text-white' : ''}`}>
                        <Link href={categoryPath}>
                            {category.replaceAll('-', ' ')}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default NavigationMenu