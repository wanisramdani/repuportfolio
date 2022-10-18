import React from 'react'

interface IExCard {
  jobPosition?: string;
  companyName?: string;
  dateStart?: string;
  dateEnd?: string;
  children?: React.ReactNode;
}

const defaultProps: IExCard = {
  jobPosition: 'Job Position',
  companyName: 'Company Name',
  dateStart: 'Date Started',
  dateEnd: 'Present',
}

export const ItemExCard = ({jobDescription}: {jobDescription?: string}) => {
  return (
    <li className='text-sm'>{jobDescription}</li>
  )
}

const ExCard: React.FC<IExCard> = ({jobPosition, companyName, dateStart, dateEnd, children}) => {
  return (
    <div className='rounded-xl shadow-md hover:shadow-xl hover:drop-shadow-2xl p-8  w-96 opacity-40 hover:opacity-100 focus:opacity-100'>
      <div className='flex flex-col'>
        <div className='text-xl'>{jobPosition}</div>
        <div className='text-md'>{companyName}</div>
      </div>
      <div className='mt-6 flex gap-2 text-xs text-tertiary'>
        <div>Date Started</div>
        <div>-</div>
        <div>Present</div>
      </div>
      <div className='mt-3 text-gray-400'>
        <ul className='normal-case list-disc list-inside space-y-2'>
          {children}
        </ul>
      </div>

    </div>
  )
}
ExCard.defaultProps = defaultProps;

export default ExCard