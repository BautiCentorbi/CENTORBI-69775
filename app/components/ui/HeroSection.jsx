import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className={'w-full flex justify-between flex-row'}>
        <div className="max-w-[600px] flex flex-col gap-6 mx-auto my-36">
        <h1 className='max-w-80 uppercase text-white text-7xl font-black'>
            Experiencias
            <span className='uppercase text-9xl text-ourpink-dark'> Únicas!</span>
        </h1>
        <h2 className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione quo est cupiditate dignissimos quasi! Nisi officiis temporibus ad, incidunt odit similique voluptatem accusamus sit in natus ab cupiditate eveniet.
        </h2>
        <div className='flex flex-row mr-auto gap-6'>
            <a href="#" className='transition mr-auto px-6 py-2 text-lg font-semibold text-center text-white rounded-lg bg-ourblue-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400'>
                Nuestros Productos
            </a>
            <a href="#" className='transition mr-auto px-6 py-2 text-lg font-semibold text-center text-white rounded-lg bg-ourblue-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-2 dark:border-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400'>
                Nuestra Historia
            </a>
        </div>
        </div>
        <Image 
        src={'/images/HeroSection.svg'}
        height={40}
        width={720}
        alt='Hero Section Image'
        />
    </div>
  )
}

export default HeroSection