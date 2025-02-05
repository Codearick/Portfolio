"use client"
import React from 'react'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TransitionEffect from "@/components/TransitionEffect";

function page() {
  return (
    <>

<Head>
  <title>Rohan Gautam | About Me</title>
  <meta name="description" content="Learn more about Rohan Gautam, a passionate web developer specializing in Next.js, MERN stack, and backend development. Discover his skills, experience, and projects." />
  <meta name="keywords" content="Rohan Gautam, about Rohan, web developer, Next.js, MERN stack, React, JavaScript, full-stack developer, portfolio, software engineer" />
  <meta name="author" content="Rohan Gautam" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Rohan Gautam | About Me" />
  <meta property="og:description" content="Discover Rohan Gautam's journey as a web developer, his technical skills, and experience in Next.js, React, and backend development." />
  <meta property="og:image" content="/images/profile.jpg" />
  <meta property="og:url" content="/about" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rohan Gautam | About Me" />
  <meta name="twitter:description" content="Learn more about Rohan Gautam, a passionate web developer specializing in Next.js, MERN stack, and backend development." />
  <meta name="twitter:image" content="/images/profile.jpg" />
  <link rel="canonical" href="/about" />
</Head>

      <TransitionEffect />
      <main>
        <Layout className='pt-0'>
        <Skills />
        </Layout>
      </main>

    </>

  )
}

export default page
