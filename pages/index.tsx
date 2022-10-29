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

const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const Projects = dynamic(() => import('../components/Proejcts'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const SkillsSection = dynamic(() => import('../components/SkillsSection'), { ssr: false });

import useOnScreen from '../hooks/useOnScreen'
import dynamic from 'next/dynamic'

const Page: NextPageWithLayout = () => {
    const experienceRef = React.useRef(null);
    const [isExperienceVisible, setIsExperienceVisible] = React.useState(false);
    const projectsRef = React.useRef(null);
    const [ isProjectsVisible, setIsProjectsVisible ] = React.useState(false);
    const aboutRef = React.useRef(null);
    const [ isAboutVisible, setIsAboutVisible ] = React.useState(false);
    const skillsRef = React.useRef(null);
    const [ isSkillsVisible, setIsSkillsVisible ] = React.useState(false);

    const experienceRefOnScreen = useOnScreen( {ref: experienceRef} );
    const projectsRefOnScreen = useOnScreen( {ref: projectsRef} );
    const aboutRefOnScreen = useOnScreen( {ref: aboutRef} );
    const skillsRefOnScreen = useOnScreen( {ref: skillsRef} );

    
    
   {/* React.useEffect( ()=>{
      if(!isExperienceVisible) setIsExperienceVisible(experienceRefOnScreen);
      if(!isProjectsVisible) setIsProjectsVisible(projectsRefOnScreen);
      if(!isAboutVisible) setIsAboutVisible(aboutRefOnScreen);
      if(!isSkillsVisible) setIsSkillsVisible(skillsRefOnScreen);
    }, [experienceRefOnScreen, projectsRefOnScreen, aboutRefOnScreen, skillsRefOnScreen] )
  */}

    return (
      <motion.div className='flex flex-col justify-center items-center md:shadow-2xl snap-mandatory snap-y z-0 font-bold uppercase tracking-widest'>

        <section id='home'>
          <Home />
        </section>
        <section id='experience' ref={experienceRef}>
          {experienceRefOnScreen && <Experience />}
        </section>

        <section id="projects" ref={projectsRef}>
          {projectsRefOnScreen && <Projects />}
        </section> 
        <section id="skills" ref={skillsRef}>
          {skillsRefOnScreen && <SkillsSection />}
        </section>
        <section id='about' ref={aboutRef}>
          {aboutRefOnScreen && <About />}
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
