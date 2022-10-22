import React from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

type Props = {}

export default function Pagination({}: Props) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(8)

  return (
    <div className='flex gap-4 items-center'>
        <button>
            <AiOutlineLeft />
        </button>

        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
            <div key={page} className='rounded-full w-2 h-2 bg-secondary hover:bg-gray-200 focus:bg-gray-200'>
            </div>
        ) )
        }
            
        <button>
            <AiOutlineRight />
        </button>

    </div>
  )
}