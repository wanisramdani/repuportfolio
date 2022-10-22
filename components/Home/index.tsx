import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import AnimateCharacters from '../../animation/AnimateCharacters';
import Contact from '../Contact';

type Props = {}

export default function Home({}: Props) {
    const headerStyle:string = 'px-20 flex justify-center items-center w-24 h-10 hover:border-2 hover:rounded-full hover:border-white hover:text-white';
    const list = { 
        show: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }
        
    const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
      };
      const textAnimation = {
        hidden: {
          y: "200%",
          color: "#a9a9a9", //gray
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        show: {
          y: 0,
          color: "#ffffff", //white
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
      }

  return (
    <div className='mb-24'>
      
        {/* PIC */}
        <motion.div className='text-center mb-12 w-36 mx-auto'
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
                  delay: 0.5,
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }
            }}
            whileHover={{ 
              scale: [null, 1.3, 1.2],
              shadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Image className='w-8 h-8 rounded-full ' alt="Portfolio Picture" src='/images/pf.jpg' width={150} height={150}  />
        </motion.div>
        {/* NAME */}
        <div className='text-center'>
            {/* Title */}
            <motion.div 
              className='text-xs tracking-[.55em] text-tertiary'
              initial="hidden" animate="show" 
              variants={{
                hidden: {
                  opacity: 0,
                  y: "100%"
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                    ease: "easeInOut"
                  }
                }
              }}
            >
                Software engineer  
            </motion.div>
            {/* NAME */}
            <motion.div  className='text-5xl m-5'>
              <AnimateCharacters>
                 Repu Rupester
              </AnimateCharacters>
             
            </motion.div>
        </div>
        {/* Headers */}
        <div>
            <motion.ul initial="hidden" animate="show" variants={list}  className='flex text-tertiary gap-4 justify-center items-center cursor-pointer '>
                <motion.li variants={item} className={headerStyle}><Link href="#home">Home</Link> </motion.li>
                <motion.li variants={item} className={headerStyle}><Link href="#experience">Experience</Link></motion.li>
                <motion.li variants={item} className={headerStyle}><Link href="#projects">Projects</Link></motion.li>
                <motion.li variants={item} className={headerStyle}><Link href="#skills">Skills</Link></motion.li>
                <motion.li variants={item} className={headerStyle}><Link href="#about">About</Link></motion.li>
                <motion.li variants={item} className={headerStyle}><Link href="#">Contact</Link></motion.li>
            </motion.ul>
        </div>
        {/* Contact me*/}
        <Contact />


    </div>
  )
}