import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi';
import ContactModal from './ContactModal';
import Modal from '../Modal';
import { Dialog } from '@headlessui/react';

type Props = {}

function Contact({}: Props) {
    const [ isOpen, setIsOpen ] = React.useState(false);
    const closeModal = () => { setIsOpen(false) }
    const openModal = () => { setIsOpen(true) }


  return (
    <div>
        <motion.div className='absolute bottom-10 right-48'
            initial="hidden" animate="show"
            variants={{
                hidden:{
                    opacity: 0,
                    y: 50,

                },
                show:{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 0.5,
                        ease: [0.6, 0.01, -0.05, 0.95],
                    }
                }
            }}
            whileTap={{ scale: 0.9 }}
        >
                <div className=''>
                    {/* icon  */}
                    <motion.div
                        whileHover={{
                            scale: [null, 1.3, 1.2],
                        }}
                        className='hover:bg-gray-200 hover:text-black w-12 h-12 rounded-full border-2 shadow-xl drop-shadow-log flex justify-center items-center cursor-pointer' 
                        onClick={ ()=> ( openModal() ) }
                    >
                        <HiOutlineMail size={24}/>
                    </motion.div> 
                    {/* modal */}
                    {/* text:contact me */}
                </div>
        </motion.div>
        
        <ContactModal isOpen={isOpen} closeModal={closeModal} />   
    
    </div>
  )
}

export default Contact