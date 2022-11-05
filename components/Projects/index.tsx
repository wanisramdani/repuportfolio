import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import ProjectCard from './ProjectCard'

import useSWR from 'swr'
import TechStack from './TechStack'

type Props = {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Projects = (props: Props) => {
    const { data, error } = useSWR('/api/projects', fetcher)

     //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    
    return (
      <motion.div className='flex flex-col justify-center items-center gap-24'
        initial="hidden" animate="show"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0
          },
          show: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.1,
              duration: 0.1,
              ease: "easeInOut"
            }
          }
        }}
      >
          <p className='text-3xl tracking-widest font-extrabold'>Projects</p>


        <div className='grid grid-cols-1 sm:grid-cols-2 content-center w-80 md:flex md:flex-cols gap-12 md:gap-8 md:w-[960px]  p-12  overflow-y-scroll  md:overflow-x-scroll md:overflow-y-hidden'> 

          {Object.entries(data).map( (project:any) => (
            <ProjectCard 
              key={project[1].id}
              title={project[1].title}
              description={project[1].description}
              githubLink={project[1].githubLink}
              productionLink={project[1].productionLink}
            >
              <TechStack data={project[1].techStack} /> 
            </ProjectCard>

          ) ) }
        </div> 
      </motion.div>
    )
}


export default Projects