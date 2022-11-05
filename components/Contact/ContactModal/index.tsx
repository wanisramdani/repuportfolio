import { Dialog } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { CgSpinnerTwoAlt } from "react-icons/cg"
import SuccessfulModal from '../../Modal/SuccessfulModal'

type Props = {
  isOpen: boolean,
  closeModal: () => void
}


function ContactModal({ isOpen, closeModal }: Props) {
    const [ email, setEmail ] = React.useState('')
    const [ subject, setSubject ] = React.useState('')
    const [ message, setMessage ] = React.useState('')
    const [ isSuccessful, setIsSuccessful ] = React.useState(false)
    const [ succModal, setsuccModal ] = React.useState(false)
    const [ loading, setLoading ] = React.useState(false)

    const closeSuccModal = () => { setsuccModal(false) }
    const openSuccModal = () => { setsuccModal(true) }

    const openSuccessfulModal = () => {
      setIsSuccessful(true)
      openSuccModal()
    }

    const openFailureModal = () => {
      setIsSuccessful(false)
      openSuccModal()
    }
    const Loading = () => (
      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
            <div className='flex justify-center items-center h-full'>
              <CgSpinnerTwoAlt className='animate-spin' size={80} />
            </div>
        </div>
    )

    const form = React.useRef<HTMLFormElement>(null)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        closeModal(),
        setLoading(true)

        axios.post('/api/email', {
            email,
            subject,
            message
        }).then( ()=>(
          setLoading(false),
          openSuccessfulModal()
        ) ).catch(err => ( 
          setLoading(false),
          openFailureModal()
        ))
        
    }

  return (
    <form ref={form} onSubmit={handleSubmit}>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Background */}
        <Transition.Child>
          <div className='fixed inset-0 bg-black bg-opacity-50' />
        </Transition.Child>
        
        {/* Modal */}
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child>

              <Dialog.Panel 
                className="w-full max-w-md transofrm overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle shadow-lg transition-all"
              >
                <Dialog.Title className="text-xl font-extrabold tracking-widest text-gray-200 text-center">
                  Contact me
                </Dialog.Title>
                {/* inputs */}
                <div className='mt-4'>

                  <div className=''>
                    <p className='normal-case text-gray-300 mb-1'>Your Email: </p>
                    <input type="text" placeholder="email@contact.me"         className='bg-secondary rounded-md p-2 w-80 h-8 text-gray-300 '
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className='mt-2'>
                    <p className='normal-case text-gray-300  mb-1'>Subject: </p>
                    <input type="text" placeholder="Hire me" className='bg-secondary rounded-md p-2 w-80 h-8 text-gray-300 '
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  
                  <div className='mt-2'>
                    <p className='normal-case text-gray-300  mb-1'>Message: </p>
                    <textarea placeholder="I want to hire you" className='bg-secondary rounded-md p-2 w-80 h-32 text-gray-300 '
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                </div>
                {/* submit button */}
                
                <motion.div 
                  className='mt-4'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <button
                    className='border-2 border-secondary hover:bg-secondary text-gray-300 hover:text-gray-400 font-bold w-full h-10 rounded-md tracking-wider'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </motion.div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

      </Dialog> 
    </Transition>
    {loading ? <Loading /> : <SuccessfulModal isOpen={succModal} sucessful={true}         closeSuccModal={ closeSuccModal } />
    }
    </form>
  )
}

export default ContactModal