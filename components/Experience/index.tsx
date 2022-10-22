import React from 'react'
import ExCard, { ItemExCard } from './ExCard'

type Props = {}

function Experience({}: Props) {
  return (
    <div className='flex flex-row gap-12 overflow-x-scroll w-full p-20 space-x-10 snap-x snap-mandatory' >
        <ExCard >
          <ItemExCard jobDescription='Job description' />
          <ItemExCard jobDescription='Job description' />
        </ExCard>

    </div>
  )
}

export default Experience

