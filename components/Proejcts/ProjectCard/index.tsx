import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';


interface Props {
    githubLink: string;
    productionLink?: string;
    title: string;
    description: string;
    children?: React.ReactNode;
}


function ProjectCard( {githubLink, productionLink, title, description, children}: Props) {
    const [ imagePreview, setImagePreview ] = React.useState("");

    const handleImagePreview = async (url:any) => {
        let {
            data: { image },
        } = await axios.get("/api/preview", {
            params: { url },
        })
        setImagePreview(image);
    }

    React.useEffect( () => {
        handleImagePreview(productionLink)
    }, [] )

    return (
        <a href={githubLink}>
            <div className='py-1 h-content w-72 bg-secondary opacity-50 hover:opacity-100 shadow-xl drop-shadow-md'>
                <div className='h-1/2 flex justify-center items-center shadow-xl drop-shadow-md '>
                    <Image width="280" height="150" className='object-cover object-top' src={`data:image/jpeg;base64, ${imagePreview}`} alt="project preview" />
                </div>
                <div className='mt-2 ml-4 flex flex-col gap-5'>
                    <div className='flex justify-center text-gray-200'>{title}</div>
                    <div className='normal-case font-normal text-tertiary mb-1'>{description}</div>
                    <div className='flex justify-center items-center gap-4 text-gray-200 mb-3'>
                        {children}              
                    </div>
                </div>
            </div>
        </a>
    )
}

const defaultprojectCard = {
    githubLink: "https://github.com/wanisramdani/rockpaperscissors",
    productionLink: "https://rockpaperscissors-rho.vercel.app/",
    title: "Project title",
    description: "description",
    children: <FaReact className='text-4xl' />
}

ProjectCard.defaultProps = defaultprojectCard;

export default ProjectCard