import Image from 'next/image'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-20'>
        {/*pic*/}
        <div >
            <Image className='shadow-lg drop-shadow-lg rounded-2xl' alt='Profile picture relative' src={"/images/pf.jpg"} width={300} height={300} />
        </div>
        {/*info*/}
        <div className='border-secondary p-4 w-1/2 md:w-1/3 normal-case  rounded-md'>
            <div className='text-2xl font-bold text-left mb-5'>About Me</div>
            <div>
                <p className='text-md text-gray-400'>I'm a software engineer graduate with a passion for building web applications. I have experience working with React, Next.js, Spring and Django. I am also familiar with Python, Java, javascript and typescript. I am currently looking for a full-time entry level software engineering position.</p>
            </div>
        </div>
    </div>
  )
}

export default About