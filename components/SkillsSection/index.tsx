import React from 'react'
import Skill from '../Skills'
import { FaReact, FaPython, FaJava } from 'react-icons/fa'
import { SiDjango, SiSpring, SiTypescript, SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Tooltip from '../Tooltip'
import { motion } from 'framer-motion'

type Props = {}

export default function SkillsSection({}: Props) {
  return (
    <motion.div
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
      <div className='text-center mb-20 font-bold tracking-widest text-5xl '>Skills</div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
        
        <Tooltip text='Python'>
          <Skill>
            <FaPython size={70} />
          </Skill>
        </Tooltip>
    
        <Tooltip text='Java'>
          <Skill>
            <FaJava size={70} />
          </Skill>
        </Tooltip>

        <Tooltip text='Typescript'>
          <Skill>
            <SiTypescript size={70} />
          </Skill>
        </Tooltip>

        <Tooltip text='Javascript'>
          <Skill>
            <SiJavascript size={70} />
          </Skill>
        </Tooltip>

        {/* Frameworks */}
        <Tooltip text='Django'>
          <Skill>
            <SiDjango size={70} />
          </Skill>
        </Tooltip>

        <Tooltip text='Spring'>
          <Skill>
            <SiSpring size={70} />
          </Skill>
        </Tooltip>

        <Tooltip text='Nextjs'>
          <Skill>
            <TbBrandNextjs size={70} />
          </Skill>
        </Tooltip>
        
        <Tooltip text='Reactjs'>
          <Skill>
            <FaReact size={70} />
          </Skill>
        </Tooltip>
        

      </div>
    </motion.div>
  )
}