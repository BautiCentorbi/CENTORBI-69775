import React from 'react'

const Admin = () => {
  return (
    <div className='flex flex-col flex-grow h-[80vh] w-full items-center justify-center'>
        <div className='flex flex-col max-w-sm gap-4'>
          <div className='flex flex-col gap-1'>
            <label className='text-semibold'>Ingresa tu usuario</label>
            <input className='py-1 px-4 rounded-lg' type='text'></input>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-semibold'>Ingresa tu contraseña</label>
            <input className='py-1 px-4 rounded-lg' type='text'></input>
          </div>
          <h4 className='text-slate-600'>Esta sección es solo para administradores</h4>
        </div>
    </div>
  )
}

export default Admin