import React from 'react'
import Header from './Header'

type Props = {
    children?: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <div className='text-white container mx-auto h-screen   '>
      <Header className='flex justify-between items-center px-20 mt-10 '/>
        <div>
          {children}
        </div>
    </div>
  )
}

export default Layout