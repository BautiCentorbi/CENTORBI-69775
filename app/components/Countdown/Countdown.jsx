'use client';
import React, { useEffect, useState } from 'react'

const Countdown = ({targetDate}) => {
    
    const calculateTimeLeft = () => {
        const diff = +new Date(targetDate) - +new Date()
        let timeLeft = {}

        if (diff > 0) {
            timeLeft = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            }
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }
    
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    return (
    <div>
        <h2 className='text-4xl font-bold text-center mb-8'>Fin del Curso</h2>
        <div className='w-full flex flex-row gap-8 items-center'>
            <div className="flex flex-col items-center">
                <span className='text-8xl font-bold text-ourpink-dark tabular-nums'> {timeLeft.days} </span>
                <span className='uppercase'>days</span>
            </div>
            
            <span aria-hidden='true' className='text-5xl justify-center'> : </span>
            
            <div className="flex flex-col items-center">
                <span className='text-8xl font-bold text-ourpink-dark tabular-nums'> {timeLeft.hours} </span>
                <span className='uppercase'>hours</span>
            </div>
            
            <span aria-hidden='true' className='text-5xl justify-center'> : </span>
            
            <div className="flex flex-col items-center">
                <span className='text-8xl font-bold text-ourpink-dark tabular-nums'> {timeLeft.minutes} </span>
                <span className='uppercase'>minutes</span>
            </div>
            
            <span aria-hidden='true' className='text-5xl justify-center'> : </span>
            
            <div className="flex flex-col items-center">
                <span className='text-8xl font-bold text-ourpink-dark tabular-nums'> {timeLeft.seconds} </span>
                <span className='uppercase'>seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Countdown