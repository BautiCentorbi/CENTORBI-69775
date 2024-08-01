import React from 'react'
import InfoSection from './InfoSection'
import HeroSection from './HeroSection'
// import Countdown from '../Countdown/Countdown'


const Main = () => {
  const cardImage = {
    borderRadius: '16px'
  }
  const targetDate = new Date('2024-08-28T00:00:00')

  return (
    <div className='flex flex-col items-center align-center my-8 mb-20 w-full min-h-screen'>
      <HeroSection />
      <div className='my-24 w-[720px] border-b-2 border-b-ourpink-dark/70'></div>
      {/* <Countdown targetDate={targetDate}/> */}
      <InfoSection className={'animate-fade-in animate-delay-300 my-8'}/>
    </div>
  )
}

export default Main