import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
type Props = {}

function ProjectCard({}: Props) {
    const [selectedId, setSelectedId] = React.useState<number | null>(null)
    const items= {
        1: {
            title: 'Project 1',
            description: 'Description 1',
            image: 'https://picsum.photos/200/300',
            link: 'https://google.com'
        },
        2: {
            title: 'Project 2',
            description: 'Description 2',
            image: 'https://picsum.photos/200/300',
            link: 'https://google.com'
        },
    }
  return (
    <div className='flex gap-5'>
        {Object.keys(items).map( (key, item) => (
            <motion.div
            key={key}
            className='bg-secondary w-64 h-44 rounded-lg p-6'
            onClick={ () => setSelectedId(1) }
            > 
                <div>item</div>
                <div>{item.title}</div>
            </motion.div> 
        ) )  }

       
        <AnimatePresence>
            { selectedId === 1 && (
                <motion.div
                    layoutId='project-card'
                    className='bg-secondary w-64 h-32 rounded-lg'
                    onClick={ () => setSelectedId(null) }
                >
                    <div>sub</div>
                    <div>title</div>
                </motion.div>
            )}

        </AnimatePresence>
    </div>
    )
}

export default ProjectCard