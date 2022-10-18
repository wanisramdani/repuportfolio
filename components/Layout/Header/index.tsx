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
        <div> <a href="#"> <FaLinkedinIn className='w-8 h-5' /> </a> </div>
      </div>
      <motion.div className='cursor-pointer px-4 h-8 flex gap-2 justify-center items-center rounded-xl border border-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
       <FaDownload /> Download Resume
      </motion.div>
    </div>
  )
}

export default Header