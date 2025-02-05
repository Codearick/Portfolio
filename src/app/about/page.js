"use client"

import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Profilepic from "@/../public/images/profile/myPic.png"
import Image from 'next/image'
import { motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
// import Experience from '@/components/Experience'
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])



  return <span ref={ref}></span>

}

function page() {
  const ref = useRef(null);
  return (
    <>
    <Head>
  <title>About Rohan Gautam - MERN Stack & Next.js Web Developer</title>
  <meta 
    name="description" 
    content="Discover Rohan Gautam, a MERN Stack and Next.js web developer passionate about building scalable, high-performance web applications. Learn more about his skills, experience, and projects." 
  />
  <meta name="keywords" content="Rohan Gautam, MERN Stack, Next.js Developer, Full-Stack Developer, Web Development, React.js, JavaScript, Portfolio" />
  <meta name="author" content="Rohan Gautam" />
  
  {/* Open Graph (OG) Tags for Social Media */}
  <meta property="og:title" content="About Rohan Gautam - MERN Stack & Next.js Developer" />
  <meta property="og:description" content="Explore the journey of Rohan Gautam, a skilled web developer with expertise in the MERN stack and Next.js." />
  <meta property="og:image" content="/images/profile/myPic.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/about" />

  {/* Twitter Card for Better Visibility */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Rohan Gautam - MERN Stack & Next.js Developer" />
  <meta name="twitter:description" content="Discover the journey of Rohan Gautam, a passionate MERN Stack developer specializing in Next.js and full-stack web development." />
  <meta name="twitter:image" content="/images/profile/myPic.png" />

  {/* Canonical URL */}
  <link rel="canonical" href="/about" />
</Head>

      <TransitionEffect />
      <main className='flex flex-col items-center justify-center w-full'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

          <div className='grid w-full grid-cols-8 gap-16 relative sm:gap-8 items-center justify-center'>
            <div className='para col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75'>Biography</h2>

              <p className='font-medium'>Hi, I'm Rohan, a passionate web developer with a strong foundation in the MERN stack and Next.js. I am eager to apply my skills to build scalable and efficient web applications.
              </p>

              <p className='font-medium my-4'>Throughout my learning journey, I have worked on various projects that showcase my ability to develop dynamic and responsive web applications.
              </p>

              <p className='font-medium'>With strong grasp of core computer science concepts, I aim to use my technical expertise and passion for coding to contribute to innovative projects and grow as a software developer.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border border-solid dark:border-light border-dark dark:bg-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>

              <Image priority={true} src={Profilepic} alt="RohanGautam" className="w-full h-auto rounded-2xl dark:border-light"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] dark:bg-light bg-dark' />
            </div>

            <div className='col-span-2 gap-4 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center xl:justify-center md:order-3 md:col-span-8'>
              <div className='flex flex-col items-center justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-3xl'><AnimatedNumbers value={5} />+</span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-xs xl:text-sm'>Projects completed</h2>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-3xl'><AnimatedNumbers value={4} />+</span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-xs xl:text-sm'>years of dedication</h2>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-3xl'><AnimatedNumbers value={100} />+</span>
                <h2 className='text-xl font-medium capitalize dark:text-light/75 text-dark/75 xl:text-center md:text-lg sm:text-xs xl:text-sm'>sleepless nights</h2>
              </div>
            </div>

          </div>


          {/* <Experience/> */}
          <Education reference={ref} />
        </Layout>
      </main>
    </>

  )
}

export default page
