import React from 'react'
import ItemList from '@/app/components/ui/ItemList/ItemList'

const getProducts = async(category) => {
    const data = await fetch(`http://localhost:3000/api/productos/${category}`)
    const productos = await data.json()
    return productos
}

const Products = async({params}) => {
    const { category } = params
    const products = await getProducts(category)
    return( 
        <>
            <ItemList category={category} productos={products} />
        </>
    )
}

export default Products