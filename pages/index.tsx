import React from 'react'
import { ReactElement } from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'

import { NextPageWithLayout } from './_app'
import { motion } from 'framer-motion'

import Experience from '../components/Experience'
import Projects from '../components/Projects'
import SkillsSection from '../components/SkillsSection'
import About from '../components/About'

import useOnScreen from '../hooks/useOnScreen'

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
    
   React.useEffect( ()=>{
      if(!isExperienceVisible) setIsExperienceVisible(experienceRefOnScreen);
      if(!isProjectsVisible) setIsProjectsVisible(projectsRefOnScreen);
      if(!isAboutVisible) setIsAboutVisible(aboutRefOnScreen);
      if(!isSkillsVisible) setIsSkillsVisible(skillsRefOnScreen);
    }, [experienceRefOnScreen, projectsRefOnScreen, aboutRefOnScreen, skillsRefOnScreen, isExperienceVisible, isProjectsVisible, isAboutVisible, isSkillsVisible] )
  

    return (
      <motion.div className='flex flex-col justify-center items-center snap-mandatory snap-y z-0 font-bold uppercase tracking-widest'>

        <section id='home' className='snap-center'>
          <Home />
        </section>
        
        <section id='about' className='snap-center' ref={aboutRef}>
          {aboutRefOnScreen && <About />}
        </section>

        <section id='experience' className='snap-center' ref={experienceRef}>
          {experienceRefOnScreen && <Experience />}
        </section>

        <section id="projects" className='snap-center' ref={projectsRef}>
          {projectsRefOnScreen && <Projects />}
        </section> 
        <section id="skills" className='snap-center' ref={skillsRef}>
          {skillsRefOnScreen && <SkillsSection />}
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
