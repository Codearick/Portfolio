import React from 'react'
import icons from './Icons'
import Link from 'next/link'

function HireMe() {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden sm:right-0 md:right-6 md:left-auto md:top-0 md:bottom-auto md:absolute z-30'>
            <div className='w-32 md:w-24 h-auto flex items-center justify-center relative'>
            <icons.CircularText className={"fill-dark dark:fill-light animate-spin-slow"}/>

            <Link href="mailto:rohan.gautam650@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light dark:text-dark text-light shadow-md border dark:border-light border-dark w-16 h-16 rounded-full font-semibold dark:hover:bg-dark hover:bg-light dark:hover:text-light hover:text-dark text-sm md:w-12 md:h-12 md:text-[10px]'>
            Hire Me
            </Link>
            
            </div>
        </div>
    )
}

export default HireMe
