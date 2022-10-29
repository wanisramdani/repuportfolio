import { Dialog, Transition } from '@headlessui/react'
import React, {Fragment} from 'react'
import { BiError, BiCheckCircle } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
    isOpen: boolean,
    sucessful: boolean,
    closeSuccModal: () => void
}

function SuccessfulModal({isOpen, sucessful, closeSuccModal}: Props) {

    const ErrorTitle = () => (
        <div className='flex flex-row gap-2'>
            <BiError className='text-4xl text-red-500' />
            <h1 className='text-2xl font-bold text-red-500'>Error</h1>
        </div>
    )

    const SuccessTitle = () => (
        <div className='flex flex-row gap-2'>
            <BiCheckCircle className='text-4xl text-green-500' />
            <h1 className='text-2xl font-bold text-green-500'>Success</h1>
        </div>
    )

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeSuccModal}>
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
                                <Dialog.Title className="text-xl font-extrabold tracking-widest text-gray-200 text-center flex flex-row justify-between">
                                    {sucessful ? <SuccessTitle /> : <ErrorTitle />}
                                    <button className='mr-3  ' onClick={closeSuccModal}> 
                                        <AiOutlineClose size={30}/>
                                    </button>

                                </Dialog.Title>
                                <div className='mt-4'>
                                    <p className='normal-case text-gray-300 mb-1'>
                                        {sucessful ? 'Your message has been sent!' : 'There was an error sending your message. Please try again later.'}
                                    </p>
                                </div>

                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
  )
}

export default SuccessfulModal