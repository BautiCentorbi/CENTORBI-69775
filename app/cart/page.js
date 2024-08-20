import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../components/ui/Buttons/PrimaryButton'
import SecondaryButton from '../components/ui/Buttons/SecondaryButton'

const Cart = () => {
  return (
    <div className='mx-auto npmh-screen flex flex-col md:flex-row gap-4 gap-16 md:justify-center mt-4 md:mt-16'>
      <div>
        <h1 className='text-2xl md:text-5xl font-bold my-4'>Items en el Carrito</h1>
        <div className='bg-background-dark rounded-lg grid grid-cols- md:grid-cols-4 h-fit items-center justify-items-center px-4'>
          <picture className='m-4'>
            <Image 
              src={'https://firebasestorage.googleapis.com/v0/b/next-curs.appspot.com/o/userInterface.png?alt=media&token=1be4f882-8ee9-4a4b-95d4-f6d5a309dfd1'}
              width={58}
              height={48}
              alt='name'
            />
          </picture>
          <h2 className='text-md md:text-xl uppercase font-bold'>UX/UI Designer Course</h2>
          <h3>Cantidad: 2</h3>
          <h3>Total: 90.000,00 ARS</h3>
        </div>
      </div>
      <div className='bg-background-dark rounded-lg flex flex-col h-fit px-4 md:px-8 py-4 md:py-8 items-center justify-items-center gap-4'>
        <h2 className='text-2xl md:text-4xl'>Resumen de Compra</h2>
        <h3 className='text-lg md:text-xl'>Cantidad de productos: 2</h3>
        <h3 className='text-lg md:text-xl font-semibold'>Total: 180.000,00 ARS</h3>
        <div className='flex flex-col w-full gap-4'>
          <PrimaryButton label={'Continuar con la compra'} link={''}/>
          <SecondaryButton label={'Vaciar Carrito'} link={''}/>
        </div>
      </div>
    </div>
  )
}

export default Cart