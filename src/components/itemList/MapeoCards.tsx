import { ICategoria, IMenu } from "@/interfaces";
import React, { useState } from "react";
import { IoInformationSharp } from 'react-icons/io5';
import oferta from '../../assets/sale.svg';
import sinTacc from '../../assets/sinTacc.webp';
import popular from '../../assets/popular.svg';
import vegetariano from '../../assets/vegetal.svg';
import { Modal } from "./Modal";

interface MapeoCards {
    data: ICategoria[]
}

export const MapeoCards: React.FC<MapeoCards> = ({ data }) => {


    const [modalOpen, setModalOpen] = useState(false)
    const [selectedModal, setSelectedModal] = useState<IMenu | null>(null)


    const handleModal = (menu: IMenu) => {
        setSelectedModal(menu)
        setModalOpen(true)
    }

    return (
        <>
            {
                data.length === 0 ?
                    <p>Porfavor Cargue sus menus a LaCarta </p>
                    :
                    data.map(menu => (
                        <div key={menu.categoria} id={`${menu.categoria.slice(3)}`} className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto justify-center items-center relative'>
                            {
                                modalOpen &&
                                <div className="fixed top-0 right-0 h-screen w-full z-30 bg-black/30"></div>
                            }
                            <div className="md:col-span-2">
                                <h2 className="inline-block categoria bg-bgPrice/95 text-start uppercase  text-white  sm:text-lg tracking-widest px-3 rounded-r-sm text-center font-bold " style={{ textShadow: '0px 1px 1px #000', boxShadow: '0px 0px 2px #000' }}>{menu.categoria}</h2>
                            </div>
                            {menu.menus.map(m => (
                                <div key={m.nombre} className='my-2 md:my-5 '>
                                    <div className='grid grid-cols-4 px-3 border-b pb-2 mb-2 md:max-w-md md:h-28 lg:max-w-xl lg:h-32'>
                                        {
                                            m.imagen ?
                                                <div className="col-start-1 col-span-1 row-span-3 mr-2  flex items-center">
                                                    {m.imagen && <img className="rounded-sm transform object-cover h-full w-full lg:w-[120px] lg:h-[120px] shadow shadow-black" src={m.imagen} alt={m.nombre} />}
                                                </div>
                                                :
                                                null
                                        }
                                        <div className={`${m.imagen ? 'col-start-2 col-span-3' : m.ingredientes.length === 0 && 'col-start-1 col-span-3'} `}>
                                            <div className="flex items-center gap-1 justify-start ">
                                                {m.esPromo === true && <img className="w-5 h-5" src={oferta} alt='offer' />}
                                                {m.esPopular === true && <img className="w-5 h-5" src={popular} alt='popular' />}
                                                <p className='tracking-wider text-lg sm:text-xl font-bold inline-block  text-bgPrice underline capitalize'  >{m.nombre}</p>
                                                {m.esVegetariano === true && <img className="w-5 h-5" src={vegetariano} alt='vegetariano' />}
                                                {m.esSinTac === true && <img className="w-5 h-5" src={sinTacc} alt='sinTACC' />}
                                            </div>
                                        </div>
                                        {
                                            m.ingredientes && m.ingredientes.length > 0 &&
                                            <div className={`${m.imagen ? 'col-start-2 col-span-3' : 'col-start-1 col-span-4'} `}>
                                                <p className="text-sm  text-gray-900  tracking-wider pt-1 rounded rounded-md capitalize truncate" >{m.ingredientes.join(', ')}</p>
                                            </div>
                                        }
                                        <div className={`${!m.imagen ? 'col-start-1 col-span-4' : 'col-start-2 col-span-3'} col-span-3 flex items-center justify-between pt-1   `}>
                                            <p className="text-bgPrice tracking-wider text-base sm:text-xl font-semibold  inline-block pt-1" >${m.precio}</p>
                                            <IoInformationSharp className="text-2xl cursor-pointer text-primary bg-bgPrice rounded shadow shadow-black" onClick={() => handleModal(m)} />
                                        </div>
                                    </div>
                                    {
                                        modalOpen && selectedModal &&
                                        <Modal
                                            imagen={selectedModal.imagen}
                                            nombre={selectedModal.nombre}
                                            ingredientes={selectedModal.ingredientes}
                                            precio={selectedModal.precio}
                                            esPromo={selectedModal.esPromo}
                                            esPopular={selectedModal.esPopular}
                                            esVegetariano={selectedModal.esVegetariano}
                                            esSinTac={selectedModal.esSinTac}
                                            setModalOpen={setModalOpen} />
                                    }
                                </div>
                            ))}
                        </div>
                    ))
            }
        </>
    )
}
