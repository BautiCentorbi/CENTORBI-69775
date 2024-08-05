import React from 'react'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'

const layout = ({children}) => {
  return (
    <div className='flex flex-col items-center'>
        <NavigationMenu />
        {children}
    </div>
  )
}

export default layout