import React from 'react'
import InfoSection from '../HomePage/InfoSection'
import HeroSection from '../HomePage/HeroSection'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
// import Countdown from '../Countdown/Countdown'


const Main = () => {
  const cardImage = {
    borderRadius: '16px'
  }
  const targetDate = new Date('2024-08-28T00:00:00')

  return (
    <div className='flex flex-col flex-grow items-center align-center mt-2 md:mb-20 w-full min-h-screen'>
      {/* <HeroSection /> */}
      <HeroSection />
      <div className='my-8 md:my-24 w-20 md:w-[720px] border-b-2 border-b-ourpink-dark/70'></div>
      {/* <Countdown targetDate={targetDate}/> */}
      <InfoSection className={'animate-fade-in animate-delay-300 my-8'}/>
    </div>
  )
}

export default Main