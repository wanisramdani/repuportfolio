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
import About from '../components/About'
import Pagination from '../components/Pagination'
import SkillsSection from '../components/SkillsSection'

const Page: NextPageWithLayout = () => {

    return (
      <motion.div className='flex flex-col justify-center items-center shadow-2xl snap-y snap-mandatory  z-0'>

        <section id='home' className='font-bold uppercase tracking-widest snap-start'>
          <Home />
        </section>
        <section id='experience' className='font-bold uppercase tracking-widest  snap-start'>
          <Experience />
        </section>
        {/* <section id="projects" className='font-bold uppercase tracking-widest snap-start'>
          <Projects />
        </section> */}
        <section id="skills">
          <SkillsSection />
        </section>
        <section id='about' className='font-bold uppercase tracking-widest snap-start'>
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
