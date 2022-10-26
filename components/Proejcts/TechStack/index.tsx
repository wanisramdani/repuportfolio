import React from 'react'
import { FaReact, FaPython, FaJava, FaNode } from 'react-icons/fa'
import { SiDjango, SiSpring, SiTypescript, SiJavascript, SiPostgresql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

type Props = {
    data?: any
}

const TECHSTACK_ICONS = {
    'Next': <TbBrandNextjs size={30} />,
    'TypeScript': <SiTypescript size={30} />,
    'React': <FaReact size={30} />,
    'Django': <SiDjango size={30} />,
    'Python': <FaPython size={30} />,
    'Spring': <SiSpring size={30} />,
    'Java': <FaJava size={30} />,
    'JavaScript': <SiJavascript size={30} />,
    'PostgreSQL': <SiPostgresql size={30} />,
    'Nodejs': <FaNode size={30} />
}

type T = keyof typeof TECHSTACK_ICONS

function TechStack({data}: Props) {
    const icons:any = []
    
    Object.entries(data).map( (tech:any) => (
        tech[1].map((x:T) => (icons.push( TECHSTACK_ICONS[x] )))
    ) )

    icons.map( (icon:any , i: any) => (
        console.log(i)
    ) )

    return (
    <div className='flex flex-row gap-2 justify-center items-center'>
        {
         Object.entries(data).map( (tech:any) => (
            tech[1].map((x:T) => (
                TECHSTACK_ICONS[x] 
            ))
        ) )
        }
    </div>
  )
}

export default TechStack