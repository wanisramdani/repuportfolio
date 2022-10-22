import Image from 'next/image'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex justify-center items-center gap-20 '>
        {/*pic*/}
        <div >
            <Image className='shadow-lg drop-shadow-lg rounded-2xl' alt='Profile picture relative' src={"/images/pf.jpg"} width={300} height={300} />
        </div>
        {/*info*/}
        <div className='border-secondary p-4 w-1/3 normal-case shadow-lg drop-shadow-lg rounded-md'>
            <div className='text-xl font-bold text-left mb-5'>About Me</div>
            <div>
                <p className='text-xs text-gray-400'>I'm a software engineer graduate with a passion for building web applications. I have experience working with React, Next.js, Sring and Django. I am also familiar with Python, Java, javascript and typescript. I am currently looking for a full-time entry level software engineering position.</p>
            </div>
        </div>
    </div>
  )
}

export default About