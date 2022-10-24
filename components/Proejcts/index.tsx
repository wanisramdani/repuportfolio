import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'
import Tooltip from '../Tooltip'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-24'>
        <p className='text-3xl tracking-widest font-extrabold'>Projects</p>
            <ProjectCard 
              title='Rock paper scissors' 
              description='Rock paper scissors game built with nextjs and typescript'
              githubLink='https://github.com/wanisramdani/rockpaperscissors'
              productionLink='https://rockpaperscissors-rho.vercel.app/'
            >
                    <TbBrandNextjs size={30} />
            </ProjectCard>
    </div>
  )
}

export default Projects