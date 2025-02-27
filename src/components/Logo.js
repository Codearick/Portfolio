'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion";

const MotionLink = motion.create(Link);

function Logo() {
  return (
    
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href={"/"}
      className='h-16 w-16 bg-dark text-light flex items-center justify-center border border-light rounded-full text-xl font-bold'
      whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition: {duration: 1, repeat: Infinity },
        scale:1.2
        }}
      >
      RG </MotionLink>
    </div>
  )
}

export default Logo
