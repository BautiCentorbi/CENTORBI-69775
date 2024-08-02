import React from 'react'

const CardImage = ({ style,src,height,width,alt }) => {
  return (
    <div className='max-w-xs bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900'>
        <a href="#">
            <Image 
                src={src}
                width={width}
                height={height}
                style={style}
                alt={alt}
            />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Landscape example</h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Little Description for this card for example purposes only</p>
            <a href="#" className='transition-all duration-200 inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white rounded-lg bg-ourblue-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-black dark:bg-ourblue-dark dark:hover:bg-blue-400 dark:focus:ring-blue-800'>
                Read more
            </a>
        </div>
    </div>
  )
}

export default CardImage