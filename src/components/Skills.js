import React from 'react'
import { motion } from 'framer-motion';


const Skill = ({ name, x, y}) => {
    return (
        <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark shadow-dark cursor-crosshair absolute py-6 px-4 md:text-sm md:py-4 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light xs:text-dark xs:font-bold`}
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{once: true}}

        >
            {name}
        </motion.div>
    )
}


function Skills() {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>

            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            '>

                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark cursor-crosshair lg:p-6 md:p-4 xs:p-2 xs:text-xs'
                    whileHover={{ scale: 1.1 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-5vw" y="-8vw" />
                <Skill name="CSS" x="-20vw" y="2vw" />
                <Skill name="Javascript" x="-25vw" y="-8vw" />
                <Skill name="ReactJs" x="30vw" y="-10vw" />
                <Skill name="NextJs" x="30vw" y="10vw" />
                <Skill name="TailwindCSS" x="-25vw" y="-20vw" />
                <Skill name="NodeJs" x="-25vw" y="15vw" />
                <Skill name="ExpressJs" x="1vw" y="-23vw" />
                <Skill name="MongoDB" x="-1vw" y="23vw" />
            </div>
        </>
    )
}

export default Skills
