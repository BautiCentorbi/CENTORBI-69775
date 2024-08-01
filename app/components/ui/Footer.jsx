import MainLogo from '../icons/MainLogo'
import Link from 'next/link'
import React from 'react'
import InstagramLogo from '../icons/InstagramLogo'
import GithubLogo from '../icons/GithubLogo'
import TwitterLogo from '../icons/TwitterLogo'

const Footer = () => {
  return (
    <footer className=''>
        <div className="flex flex-row justify-between mx-80  align-center">
            <div className="flex flex-col justify-center align-center">
              <MainLogo className='transition text-white hover:text-ourpink-light hover:scale-110 w-80 h-80'/>
            </div>
            <div className="flex flex-col justify-center align-center">
              <ul>
                  <li className='text-xl transition duration-200 hover:text-ourpink-light hover:font-semibold hover:translate-x-1'><Link href='/'>Home</Link></li>
                  <li className='text-xl transition duration-200 hover:text-ourpink-light hover:font-semibold hover:translate-x-1'><a href='#'>Nosotros</a></li>
              </ul>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <a target='blank' rel='noreferrer, noopener, nofollow' href='https://instagram.com/centorbii'>
                <InstagramLogo className='transition md:size-20 text-white hover:text-ourpink-light hover:scale-125' />
              </a>
              <a target='blank' rel='noreferrer, noopener, nofollow' href='https://github.com/BautiCentorbi'>
                <GithubLogo className='transition md:size-20 text-white hover:text-ourpink-light hover:scale-125' />
              </a>
              <a target='blank' rel='noreferrer, noopener, nofollow' href='https://x.com/centorbiiy'>
                <TwitterLogo className= 'transition md:size-20 text-white hover:text-ourpink-light hover:scale-125' />
              </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer