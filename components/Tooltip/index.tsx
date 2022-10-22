import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    text: string
    children: React.ReactNode
}

function Tooltip({text, children}: Props) {
    const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className='flex flex-col justify-center items-center'>
        {isHovered && (
            <AnimatePresence>
                <motion.div
                    className='relative z-10 flex justify-center items-center'   
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 10
                        },
                        show: {
                            opacity: 1,
                            y: -30
                        },
                        exit: {
                            opacity: 0,
                            y: 10
                        }
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.6, 0.05, -0.01, 0.9]
                    }}
                >
                    
                    <p className="absolute  ">
                        <div className='bg-secondary rounded-lg py-2 px-6 w-max tracking-widest font-semibold'>{text}</div>
                        <div className="bg-secondary translate-x-1 -translate-y-3 w-4 h-4 rotate-45 "></div>
                    </p> 
                </motion.div>
            </AnimatePresence>
        )}
        
       <div
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
       >
            {children}
       </div>
    </div>
  )
}

export default Tooltip