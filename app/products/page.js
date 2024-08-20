import React from 'react'
import ItemList from '../components/ui/ItemList/ItemList'

const getProducts = async() => {
    const data = await fetch(`http://localhost:3000/api/productos`)
    const products = await data.json()
    return products
}

const Productos = async() => {
    const products = await getProducts()

    return (
    <>
        <ItemList productos={products}/>
    </>
  )
}

export default Productos