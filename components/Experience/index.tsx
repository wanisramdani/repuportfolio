import React from 'react'
import ExCard, { ItemExCard } from './ExCard'

type Props = {}

function Experience({}: Props) {
  return (
    <div className='flex justify-center items-center flex-col gap-8'>
      <p className='text-3xl tracking-widest font-extrabold'>Experience</p>

      <div className='flex flex-row gap-12 overflow-x-scroll w-full p-20 space-x-10 snap-x snap-mandatory' >
        
          <ExCard jobPosition='Intern' companyName='ARTEC-INT' dateStart='August-06-21' dateEnd='July-28-21' >
            <ItemExCard jobDescription='Built task management with Django' />
            <ItemExCard jobDescription='Built article posting site' />
          </ExCard>

      </div>
    </div>
  )
}

export default Experience

