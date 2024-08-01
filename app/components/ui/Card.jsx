import React from 'react'

const Card = ({title,body,label,icon}) => {
    return (
    <article className='max-w-xs bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900'>
        <div className="p-5">
            <div className='pb-4'>
                {icon} 
            </div>
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-ourpink-dark">{title}</h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{body}</p>
            <a href="#" className='transition inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white rounded-lg bg-ourblue-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-white dark:bg-ourpink-light dark:hover:bg-ourpink-light/70 dark:focus:ring-blue-800'>
                {label}
            </a>
        </div>
    </article>
  )
}

export default Card