import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] '>

        <LiIcon reference = {ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium dark:text-light/65 text-dark/65 xs:text-sm'>{time} | {place}</span>
            <p className='font-medium w-full md:text-sm'>{info}</p>
        </motion.div>
    </li>
}


function Education({reference}) {
    const ref = reference; 
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <>
            <div className='my-60'>
                <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top' />
                    <ul className='w-full flex flex-col items-start justify-between lg:ml-3 xs:ml-9'>

                        <Details
                        type="Masters Of Computer Applications"
                        time="2023-Present"
                        place="Online Sikkim Manipal University"
                        info="Relevant courses included Data Structure and Algorithms, Web Development, Progtamming, Database Management Systems"
                        />

                        <Details
                        type="Bachelor Of Computer Applications"
                        time="2020-2023"
                        place="Online Sikkim Manipal University"
                        info="Relevant courses included Data Structure and Algorithms, Web Development, Progtamming, Database Management Systems"
                        />

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Education
