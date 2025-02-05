"use client"

import Link from 'next/link';
import React, { useState, router } from 'react';
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import icons from './Icons';
import { motion } from "framer-motion";
import useThemeToggler from "./hooks/useThemeToggler"

const CustomLink = ({ href, title, className = "" }) => {
    const path = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[3px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0 group-hover:w-full group-hover:bg-blue-500 transition-[width] ease duration-300
            ${path === href ? 'w-full' : 'w-0'}
            `}> &nbsp;
            </span>

        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const path = usePathname();

    const handleClick = () => {
        toggle();
        router.push(href);
    }


    return (
        <Link href={href} className={`${className} relative group`} onClick={handleClick}>
            {title}

            <span className={`h-[3px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0 group-hover:w-full group-hover:bg-blue-500 transition-[width] ease duration-300
            ${path === href ? 'w-full' : 'w-0'}
            `}> &nbsp;
            </span>

        </Link>
    )
}

function NavBar() {

    const [mode, setMode] = useThemeToggler();
    const [mobnav, setMobnav] = useState(false);

    const handleClick = () => {
        setMobnav(!mobnav);
    }


    return (
        <header className='sticky top-0 z-30 w-full min-h-24 px-16 py-3 font-medium text-lg flex items-center justify-between dark:bg-dark dark:text-light bg-purple-300 dark:border dark:border-t-transparent dark:border-x-transparent lg:px-16 md-px-12 sm:px-8'>

            <button onClick={handleClick}
                className={`flex-col lg:flex hidden items-center justify-center z-50`} >

                <span className={`w-9 h-0.5 block transition-all duration-300 ease-out dark:bg-light bg-dark rounded-xl ${mobnav ? `rotate-45 translate-y-3` : `-translate-y-0.5`}`}> </span>

                <span className={`w-9 h-0.5 my-1 block transition-all duration-300 ease-out dark:bg-light bg-dark rounded-xl 
                    ${mobnav ? `opacity-0` : `opacity-100`} `}> </span>

                <span className={`w-9 h-0.5 block transition-all duration-300 ease-out dark:bg-light bg-dark rounded-xl ${mobnav ? `-rotate-45` : `translate-y-0.5`}`}> </span>

            </button>


            {/* <MobileNav className={`${mobnav}`} /> */}


            <div className='desktop w-full flex items-center justify-between lg:hidden'>
                <nav className=''>
                    <CustomLink href={"/"} title="Home" className='mr-4 ' />
                    <CustomLink href={"/about"} title="About" className='mx-4 ' />
                    <CustomLink href={"/projects"} title="Projects" className='mx-4 ' />
                    <CustomLink href={"/skills"} title="Skills" className='ml-4 ' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap gap-4'>

                    <motion.a href={"https://github.com/Codearick"} target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mr-3'>{<icons.GithubIcon />}
                    </motion.a>

                    <motion.a href={"https://x.com/GautamR3han69"} target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mr-3'>{<icons.TwitterIcon />}
                    </motion.a>

                    <motion.a href={"https://www.linkedin.com/in/rohan-gautam-a2b77b246/"} target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mr-3'>{<icons.LinkedInIcon />}
                    </motion.a>

                    <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                        className='w-8 hover:animate-spin-slow '>
                        {mode === "dark" ? <icons.SunIcon className={'fill-light'} /> : <icons.MoonIcon className={'fill-light'} />}
                    </button>

                </nav>
            </div>

            {
                mobnav && <motion.div
                initial={{scale:0, opacity:0}}
                animate={{scale:1, opacity:1}}
                 className='mobile min-w-[60vw] h-full flex flex-col items-center justify-center fixed z-40 top-0 left-0 border border-y-0 border-l-0 border-dark dark:border-light dark:bg-dark/90 bg-light/75 backdrop-blur-md py-24'>

                    <nav className='flex flex-col gap-6'>
                        <CustomMobileLink href={"/"} title="Home" className='' toggle={handleClick} />
                        <CustomMobileLink href={"/about"} title="About" className='' toggle={handleClick} />
                        <CustomMobileLink href={"/projects"} title="Projects" className='' toggle={handleClick} />
                        <CustomMobileLink href={"/skills"} title="Skills" className='' toggle={handleClick} />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap gap-4 my-6 mx-2 px-3'>

                        <motion.a href={"https://github.com/Codearick"} target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 mr-3 sm:mx-1'>{<icons.GithubIcon />}
                        </motion.a>

                        <motion.a href={"https://x.com/GautamR3han69"} target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 mr-3 sm:mx-1'>{<icons.TwitterIcon />}
                        </motion.a>

                        <motion.a href={"https://www.linkedin.com/in/rohan-gautam-a2b77b246/"} target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 mr-3 sm:mx-1'>{<icons.LinkedInIcon />}
                        </motion.a>

                        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                            className='w-8 hover:animate-spin-slow  sm:mx-1'>
                            {mode === "dark" ? <icons.SunIcon className={'fill-light'} /> : <icons.MoonIcon className={'fill-light'} />}
                        </button>

                    </nav>
                </motion.div>
            }



            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    )
}

export default NavBar 
