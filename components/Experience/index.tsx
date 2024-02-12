import React from 'react'
import ExCard, { ItemExCard } from './ExCard'
import { motion } from 'framer-motion'
type Props = {}

function Experience({}: Props) {
  return (
    <motion.div className='flex justify-center items-center flex-col gap-8 snap-center'
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
      <p className='text-3xl tracking-widest font-extrabold'>Experience</p>

      <div className='flex flex-row gap-12 overflow-x-scroll w-full p-20 space-x-10 snap-x snap-mandatory' >
        
          <ExCard jobPosition='Intern' companyName='ARTEC-INT' dateStart='August-21' dateEnd='July-21' >
            <ItemExCard jobDescription='Built task management with Django' />
            <ItemExCard jobDescription='Built article posting site' />
          </ExCard>

          <ExCard jobPosition='Full-Stack Web developer' companyName='Flambosoft' dateStart='August-23' dateEnd='November-23' >
          </ExCard>

          <ExCard jobPosition='Odoo Developer' companyName='Weasydoo' dateStart='November-23' dateEnd='Current' >
          </ExCard>

      </div>
    </motion.div>
  )
}

export default Experience

