import React from 'react'
import ExCard, { ItemExCard } from './ExCard'

type Props = {}

function Experience({}: Props) {
  return (
    <div className='flex flex-row gap-12' >
      <ExCard >
        <ItemExCard jobDescription='Job description' />
        <ItemExCard jobDescription='Job description' />
      </ExCard>

      <ExCard >
        <ItemExCard jobDescription='Job description' />
      </ExCard>
    </div>
  )
}

export default Experience