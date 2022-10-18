import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from './_app'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import Experience from '../components/Experience'
import Projects from '../components/Proejcts'
import { useParallax } from '../hooks/useParallax'
import About from '../components/About'

const Page: NextPageWithLayout = () => {

    return (
      <motion.div className='flex flex-col justify-center items-center shadow-2xl'>

        <section id='home' className='font-bold uppercase tracking-widest '>
          <Home />
        </section>
        <section id='experience' className='font-bold uppercase tracking-widest'>
          <Experience />
        </section>
        <section id="projects" className='font-bold uppercase tracking-widest'>
          <Projects />
        </section>
        <section id='about' className='font-bold uppercase tracking-widest'>
          <About />
        </section>

      </motion.div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return  (
      <Layout>
        {page}
      </Layout>
  )
}

export default Page
