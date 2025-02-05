import React from 'react'
import { motion, useScroll } from 'framer-motion'



function LiIcon({reference}) {

    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });

  return (
    <figure className='absolute -left-4 stroke-dark dark:stroke-light'>
        <svg width={"75"} height={"75"} viewBox='0 0 100 100'>
            <circle cx='75' cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none animate-pulse'/>
            <motion.circle cx="75" cy="50" r="20" className=' stroke-[6px] fill-light dark:fill-dark'
            style={{
                pathLength: scrollYProgress
            }}
             />
            <circle cx='75' cy="50" r="10" className='stroke-1 fill-primary animate-pulse' />
        </svg>
    </figure>
  )
}

export default LiIcon
