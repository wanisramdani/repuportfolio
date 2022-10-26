import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'
import Tooltip from '../Tooltip'
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
      <div className='flex flex-col justify-center items-center gap-24'>
          <p className='text-3xl tracking-widest font-extrabold'>Projects</p>


        <div className='grid grid-cols-1 sm:grid-cols-2 content-center	 md:flex md:flex-cols gap-12 md:gap-8 md:w-1/2  p-12  overflow-y-scroll  md:overflow-x-scroll md:overflow-y-hidden '> 

          {Object.entries(data).map( (project:any) => (
            <ProjectCard 
              key={project[1].id}
              title={project[1].title}
              description={project[1].description}
              githubLink='https://github.com/wanisramdani/rockpaperscissors'
              productionLink='https://rockpaperscissors-rho.vercel.app/'
            >
              <TechStack data={project[1].techStack} /> 
            </ProjectCard>

          ) ) }
        </div> 
      </div>
    )
}


export default Projects