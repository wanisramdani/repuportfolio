import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi';
import ContactModal from './ContactModal';

type Props = {}

function Contact({}: Props) {
    const [ isOpen, setIsOpen ] = React.useState(false);
    const closeModal = () => { setIsOpen(false) }
    const openModal = () => { setIsOpen(true) }

  return (
    <div>
        <motion.div className='absolute right-10 md:right-[480px] bottom-10  '
            initial="hidden" animate="show"
            variants={{
                hidden:{
                    opacity: 0,
                    y: 100,
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
            whileTap={{ scale: 0.8 }}
            
        >
            {/* icon  */}
            <motion.div
                whileHover={{
                    scale: [null, 1.3, 1.2],
                }}
                className=' hover:bg-gray-200 hover:text-black w-12 h-12 rounded-lg  border-2 shadow-3xl drop-shadow-lg flex justify-center items-center cursor-pointer' 
                onClick={ ()=> ( openModal() ) }
            >

                <HiOutlineMail size={24} className="hover:text-black"/>
            </motion.div> 
            {/* text:contact me */}
        </motion.div>
        
        {/* modal */}
        <ContactModal isOpen={isOpen} closeModal={closeModal} /> 

    </div>
  )
}

export default Contact