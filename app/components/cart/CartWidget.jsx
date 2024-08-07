import Link from 'next/link'
import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <div className='flex items-center justify-center rounded-full px-2 py-2 bg-ourpink-light'>
        <Link href={'/cart'}>
            <FaCartPlus size={32} color='#ffffff'/>
        </Link>
    </div>
  )
}

export default CartWidget