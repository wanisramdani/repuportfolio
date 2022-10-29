import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children?: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <div className='text-white container mx-auto h-screen w-mins   '>
      <Header className='flex justify-between items-center px-20 mt-10 '/>
        <div>
          {children}
        </div>
      {/*<Footer className='bg-blue-400
             text-3xl text-white text-center
             inset-x-0
             bottom-0
  p-4' />*/}
    </div>
  )
}

export default Layout