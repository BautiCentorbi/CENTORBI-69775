import React from 'react'
import ItemList from '../../components/ui/ItemList/ItemList'

const getProducts = async(category) => {
    const data = await fetch(`http://localhost:3000/api/productos/${category}`)
    const products = await data.json()
    return products
}

const Products = async({params}) => {
    const { category } = params
    const products = await getProducts(category)
    return( 
        <>
            <ItemList products={products} />
        </>
    )
}

export default Products