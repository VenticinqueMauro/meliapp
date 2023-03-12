import { IMenu } from '@/interfaces';
import { IoCloseSharp } from 'react-icons/io5'
import oferta from '../../assets/sale.svg';
import sinTacc from '../../assets/sinTacc.webp';
import popular from '../../assets/popular.svg';
import vegetariano from '../../assets/vegetal.svg';

interface ModalProps extends IMenu {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: React.FC<ModalProps> = ({ imagen, nombre, ingredientes, precio, setModalOpen, esPromo, esPopular, esVegetariano, esSinTac }) => {
    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 containerAll z-50 w-full sm:max-w-4xl rounded-sm shadow-md shadow-black">
            <div className='relative'>
                <IoCloseSharp className='absolute text-3xl top-0 right-0 m-2 rounded-full bg-bgPrice/40 text-white' onClick={() => setModalOpen(false)} />
                <div className='sm:flex'>
                    {
                        imagen ?
                            <div>
                                <img src={imagen} alt={nombre} className='w-full sm:w-[250px] rounded-sm shadow' />
                            </div>
                            :
                            null
                    }
                    <div className=''>
                        <div className='px-3 py-1'>
                            <div className="flex items-center gap-1 justify-start mt-2">
                                {esPromo === true && <img className="w-5 h-5" src={oferta} alt='offer' />}
                                {esPopular === true && <img className="w-5 h-5" src={popular} alt='popular' />}
                                <p className='tracking-wider text-lg text-xl font-bold inline-block  text-bgPrice underline capitalize'  >{nombre}</p>
                                {esVegetariano === true && <img className="w-5 h-5" src={vegetariano} alt='vegetariano' />}
                                {esSinTac === true && <img className="w-5 h-5" src={sinTacc} alt='sinTACC' />}
                            </div>
                        </div>
                        <div className='px-3 py-1'>
                            <p className="text-lg  text-gray-900  tracking-wider pt-1 rounded rounded-md capitalize" >{ingredientes.join(', ')}</p>
                        </div>
                        <div className='px-3 py-1'>
                            <p className="text-bgPrice tracking-wider text-base text-xl font-semibold  inline-block pt-1" >${precio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}