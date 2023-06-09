import { IMenu } from '@/interfaces';
import { IoCloseSharp } from 'react-icons/io5';
import popular from '../../assets/popular.svg';
import oferta from '../../assets/sale.svg';
import 'animate.css'

interface ModalProps extends IMenu {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: React.FC<ModalProps> = ({ imagen, nombre, ingredientes, precio, setModalOpen, esPromo, esPopular }) => {
    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 containerAll z-50 w-full sm:max-w-4xl rounded-md shadow-md animate__animated animate__fadeIn">
            <div className='relative'>
                <IoCloseSharp className='absolute text-3xl top-0 right-0 m-2 rounded-full bg-black/40 text-white' onClick={() => setModalOpen(false)} />
                <div className='sm:flex p-3'>
                    {
                        imagen ?
                            <div className='w-full md:max-w-sm md:max-h-56 flex items-center justify-center'>
                                <img src={imagen} alt={nombre} className='object-cover w-full h-full rounded-md' style={{ objectFit: 'cover' }} />
                            </div>

                            :
                            null
                    }
                    <div className=''>
                        <div className='px-3 py-1'>
                            <div className="flex items-center gap-1 justify-start mt-2">
                                {/* {esPromo === true && <img className="w-5 h-5" src={oferta} alt='offer' />} */}
                                {esPopular === true && <img className="w-5 h-5" src={popular} alt='popular' />}
                                <p className='tracking-wider text-lg text-xl font-bold inline-block  text-gray-900 underline capitalize'  >{nombre}</p>
                            </div>
                        </div>
                        <div className='px-3 py-1'>
                            <p className="text-lg  text-gray-700  tracking-wider pt-1 rounded rounded-md capitalize" >{ingredientes.join(', ')}</p>
                        </div>
                        <div className='px-3 py-1'>
                            <p className="text-gray-900 tracking-wider text-base text-xl font-semibold  inline-block pt-1" >${precio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
