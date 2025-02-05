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
        <title>Rohan Gautam | About Page</title>
        <meta name='description' content="This is the about page of Rohan's profile" />
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
