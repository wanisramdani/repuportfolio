import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
      <motion.a className='cursor-pointer px-4 h-12 flex gap-2 justify-center items-center rounded-xl border border-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        href='/files/WanisRamdaniResume.pdf' download
      >
       <FaDownload /> Download Resume
      </motion.a>
    </div>
  )
}

export default Header