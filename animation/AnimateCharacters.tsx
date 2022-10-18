import React from 'react'
import { motion } from 'framer-motion'

interface AnimateCharactersProps {
    children: any
}

function AnimateCharacters( { children }: AnimateCharactersProps ) {
    let words = children.split(' ')
    
    return words.map((word:string, index:number) => (
        <div key={children + index}
            className='inline-block overflow-hidden' 
            style={{ display: 'inline-block', overflow: 'hidden' }}
        >
            <motion.div
                initial={{ y: "100%" }}
                animate="show"
                variants={{
                    show: (index) => ({
                        y: 0,
                        transition: {
                            delay: index * 0.3,
                        },
                    })
                }}
                custom={index}
            >
                {word + (index !== words.length - 1 ? '\u00A0' : '' ) }
            </motion.div>
        </div>
    ))
}

export default AnimateCharacters