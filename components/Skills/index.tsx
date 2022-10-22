import React from 'react'

type Props = {
    children: React.ReactNode
}

function Skill({children}: Props) {
  return (
    <div className='border-2 rounded-lg border-secondary p-16 shadow-xl drop-shadow-lg hover:bg-secondary'>
        {children}
    </div>
  )
}

export default Skill