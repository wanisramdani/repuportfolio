import React from 'react'
import { FaReact, FaPython, FaJava, FaNode } from 'react-icons/fa'
import { SiDjango, SiSpring, SiTypescript, SiJavascript, SiPostgresql, SiThymeleaf } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiMysql } from 'react-icons/di'

type Props = {
    data?: any
}

const TECHSTACK_ICONS = {
    'Next': <TbBrandNextjs size={30} key={0} />,
    'TypeScript': <SiTypescript size={30} key={1} />,
    'React': <FaReact size={30} key={2} />,
    'Django': <SiDjango size={30} key={3} />,
    'Python': <FaPython size={30} key={4} />,
    'Spring': <SiSpring size={30} key={5} />,
    'Java': <FaJava size={30} key={6} />,
    'JavaScript': <SiJavascript size={30} key={7} />,
    'PostgreSQL': <SiPostgresql size={30} key={8} />,
    'MySQL': <DiMysql size={30} key={9} />,
    'Thymeleaf': <SiThymeleaf size={30} key={10} />,
    'Nodejs': <FaNode size={30} key={9} />
}

type T = keyof typeof TECHSTACK_ICONS

function TechStack({data}: Props) {
    const icons:any = []
    
    Object.entries(data).map( (tech:any) => (
        tech[1].map((x:T) => (icons.push( TECHSTACK_ICONS[x] )))
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