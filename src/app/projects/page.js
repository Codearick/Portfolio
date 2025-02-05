import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import FramerImage from 'next/image'
import portfolioImage from "@/../public/images/projects/portfolio_image.png"
import blogImage from "@/../public/images/projects/blog_image.png"
import backendImage from "@/../public/images/projects/backend_project.png"
import musicAcademy from "@/../public/images/projects/music_academy.png"
import Icons from "@/components/Icons"
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='group w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2px xs:rounded-br-3xl xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark group-hover:bg-light xs:-right-2 sm:h-[102%] xs:rounded-[1.5rem]' />

      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-2xl shadow-2xl dark:border dark:border-light lg:w-full '>

        <FramerImage priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          src={img} alt={title}
          className='w-full h-auto'
        />

      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark sm:text-sm'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-base'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link
            href={github} target='_blank'
            className='w-10 md:w-6'> <Icons.GithubIcon />
          </Link>

          <Link
            href={link} target='_blank'
            className='ml-4 rounded-2xl bg-dark text-light p-2 px-6 font-semibold text-lg border dark:border-light border-dark hover:bg-light hover:text-dark sm:px-4 sm:text-base md:ml-2 md:text-base'>
            Visit
          </Link>

        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='group w-full max-h-[100vh] flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-6 relative xs:p-4 '>
      <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[102%] rounded-[2.1rem] bg-dark group-hover:bg-light md:-right-2 xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-xl shadow-2xl dark:border dark:border-light'>

        <Image
          src={img} alt={title} priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className='w-full h-auto'
        />

      </Link>

      <div className='w-full flex flex-col items-start justify-between p-2'>
        <span className='text-primary font-medium text-xl mt-5 dark:text-primaryDark lg:text-lg md:text-base sm:text-sm'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold lg-text-2xl sm:text-base'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light xs:hidden'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10 md:w-6'> <Icons.GithubIcon /> </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-2xl bg-dark text-light p-2 px-6 font-semibold text-lg border dark:border-light border-dark hover:bg-light hover:text-dark md:text-base'> Visit </Link>
        </div>

      </div>
    </article>
  )
}


function page() {
  return (
    <>
      <Head>
        <title>Rohan Gautam | Projects & Portfolio</title>
        <meta name="description" content="Explore Rohan Gautam's projects in web development, Next.js, Tailwind CSS, backend development, and more. Showcasing portfolio websites, blog platforms, and API-based applications." />
        <meta name="keywords" content="Rohan Gautam, portfolio, Next.js projects, web development, backend development, Tailwind CSS, React, MERN stack, Next.js portfolio, open-source projects" />
        <meta name="author" content="Rohan Gautam" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Rohan Gautam | Projects & Portfolio" />
        <meta property="og:description" content="Showcasing a range of web development projects built with Next.js, React, and backend technologies. Explore portfolio websites, blog platforms, and API-based applications." />
        <meta property="og:image" content="/images/projects/portfolio_image.png" />
        <meta property="og:url" content="/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rohan Gautam | Projects & Portfolio" />
        <meta name="twitter:description" content="Explore Rohan Gautam's projects in web development, Next.js, Tailwind CSS, backend development, and more." />
        <meta name="twitter:image" content="/images/projects/portfolio_image.png" />
        <link rel="canonical" href="/projects" />
      </Head>

      <TransitionEffect />
      <main className='w-full dark:bg-dark pb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className='mb-16 text-6xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                type="Featured Project"
                title="NextJs Portfolio Website"
                summary="A professional portfolio website using Next JS, TailwindCSS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={portfolioImage}
                link="https://github.com/Codearick/Portfolio"
                github={'https://github.com/Codearick/Portfolio'}
              />
            </div>

            <div className='col-span-6 lg:col-span-12'>
              <Project
                type="Web Development"
                title="Blog WebSite"
                summary="Developed a visually appealing blog website using Next.js named 'Next-blog' and Tailwind CSS, ensuring a user-friendly design. Implemented an OOP-based approach to integrate Appwrite functionality for user authentication, blog post management, and file handling. Utilized Redux Toolkit for efficient and easy state management and user authentication. Leveraged Next.js features like Link, Image, and Router for efficient and faster app loading."
                img={blogImage}
                link={"https://github.com/Codearick/SocialFeed-Backend-Project"}
                github={"https://github.com/Codearick/SocialFeed-Backend-Project"}
              />
            </div>

            <div className='col-span-6 lg:col-span-12'>
              <Project
                type="Backend Development"
                title="SocialFeed - Backend Project"
                summary="Developed a backend for a YouTube-style platform with authentication and video management. Created APIs for video search, sorting, pagination,subscription and playlist features. Implemented like management for videos, comments, and tweets. Conducted API testing using Postman. Utilized MongoDB, Mongoose, Multer, and Cloudinary."
                img={backendImage}
                link={"https://github.com/Codearick/NextJs-Blog-App"}
                github={"https://github.com/Codearick/NextJs-Blog-App"}
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                type="Featured Project"
                title="Music Academy Website"
                summary="Developed a responsive Music Academy website using Next.js and Tailwind CSS. Implemented dynamic UIs with Acertinity UI, hosted on Vercel. Integrated course listings, instructor profiles, and testimonials. Created user-friendly navigation and maintained a clean codebase."
                img={musicAcademy}
                link="https://nextjs-musicacademy-ui.vercel.app/"
                github={'https://github.com/Codearick/nextjs-musicacademy-ui'}
              />
            </div>

            {/* <div className='col-span-6'>
              Project 3
            </div>
            <div className='col-span-6'>
              Project 4
            </div> */}

          </div>
        </Layout>
      </main>
    </>
  )
}

export default page
