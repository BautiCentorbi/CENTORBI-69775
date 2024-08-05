import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center align-center'>
        {products.map((el) => (
            <div key={el.id} >
                <Item {...el}/>
            </div>
        ))}
    </div>
  )
}

export default ItemList