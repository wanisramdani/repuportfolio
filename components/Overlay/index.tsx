import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
    onClick?: () => void
}

function Overlay({children, onClick}: Props) {
  return (
    <motion.div
        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'
        onClick={onClick}
        initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
    >
        {children}
    </motion.div>
  )
}

export default Overlay