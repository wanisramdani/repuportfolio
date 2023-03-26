import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Contact from '../../Contact'
type Props = {
  className?: string
}

function Header({className}: Props) {
  return (
    <div className={className}>
      <div className='flex gap-3 '>
        <div> <a href="https://github.com/wanisramdani"> <FaGithubAlt className='w-8 h-5' /> </a> </div>
        <div> <a href="https://www.linkedin.com/in/abdelwanis-ramdani-51b19119b/"> <FaLinkedinIn className='w-8 h-5' /> </a> </div>
      </div>
      <div className='flex gap-3'>
        <motion.a className='cursor-pointer px-4 h-12 flex gap-2 justify-center items-center rounded-xl border border-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-'
           initial="hidden" animate="show"
           variants={{
               hidden:{
                   opacity: 0,
                   y: -100,
                   x:0,
               },
               show:{
                   opacity: 1,
                   y: 0,
                   x: 0,
                   transition: {
                       duration: 1,
                       delay: 0.5,
                       ease: [0.6, 0.01, -0.05, 0.95],
                   }
               }
           }}
          whileHover={{ scale: 1.1 }}

          href='https://bucwqkekwhobsbfywkya.supabase.co/storage/v1/object/public/resume/WanisRamdani_CV.pdf?t=2023-02-21T21:09:59.796Z&download' download
        >
        <FaDownload /> Download Resume
        </motion.a>
        {/* Contact me*/}
        <Contact />
       </div>
    </div>
  )
}

export default Header
