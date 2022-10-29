import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <motion.div className='flex flex-col md:flex-row justify-center items-center gap-20'
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
    </motion.div>
  )
}

export default About