import { useAppSelector } from "@/app/hooks";
import { selectCarta } from "@/features/menuDigital/cartaSlice";
import { ICategoria, IMenu } from "@/interfaces";
import React, { useState } from "react";
import { BiPlus } from 'react-icons/bi';
import popular from '../../assets/popular.svg';
import oferta from '../../assets/sale.svg';
import { DropDownCard } from "./DropDownCard";
import { Modal } from "./Modal";

interface MapeoCards {
    data: ICategoria[]
}

export const MapeoCards: React.FC<MapeoCards> = ({ data }) => {

    const { adminLogged } = useAppSelector(selectCarta)

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
                    <p className="text-center py-5">No se encontraron Menús... </p>
                    :
                    data.map(menu => (
                        <div key={menu.categoria} id={`${menu.categoria.slice(3)}`} className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto justify-center items-center relative' >

                            {/* FONDO OSCURO  */}

                            {
                                modalOpen &&
                                <div className="fixed top-0 right-0 h-screen w-full z-30 bg-black/5"></div>
                            }

                            {/* NOMBRE CATEGORIA  */}

                            <div className="md:col-span-2">
                                <h2 className="inline-block categoria bg-bgPrice/95 text-start uppercase  text-white  sm:text-lg tracking-widest px-3 rounded-r-sm text-center font-bold z-0 shadow shadow-black" style={{ textShadow: '0px 1px 1px #000' }}>{menu.categoria.length > 0 && menu.categoria}</h2>
                            </div>

                            {/* MAP DE CARDS  */}


                            {menu.menus.map(m => (
                                <div key={m.nombre} >
                                    <div className='grid grid-cols-4 px-3 border-b border-b-gray-400/50 py-4 lg:py-5 mb-2 sm:max-w-md  md:h-28 lg:max-w-lg lg:h-32' >
                                        {
                                            m.imagen ?
                                                <div className="col-start-1 col-span-1 row-span-3 mr-2 w-20 max-h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                                                    {m.imagen && <img className="rounded-md object-contain h-full w-full shadow shadow-black" style={{ objectFit: 'cover' }} src={m.imagen} alt={m.nombre} onClick={() => handleModal(m)} />}
                                                </div>


                                                :
                                                null
                                        }
                                        <div className={`${m.imagen ? 'col-start-2 col-span-3' : 'col-start-1 col-span-4'} flex items-center justify-between`}>
                                            <div className="flex items-center gap-1 justify-start">
                                                {/* {m.esPromo === true && <img className="w-5 h-5" src={oferta} alt='offer' />} */}
                                                {m.esPopular === true && <img className="w-5 h-5" src={popular} alt='popular' />}
                                                <p className='tracking-wider text-lg sm:text-xl font-bold inline-block  text-gray-800 underline capitalize cursor-pointer' onClick={() => handleModal(m)}>{m.nombre}</p>
                                            </div>

                                            {/* BOTON DE OPCIONES ADMIN  */}

                                            {adminLogged && <DropDownCard categoria={menu.categoria} nombre={m.nombre} menu={m} data={data} />}
                                        </div>




                                        {
                                            m.ingredientes && m.ingredientes.length > 0 &&
                                            <div className={`${m.imagen ? 'col-start-2 col-span-2' : 'col-start-1 col-span-3'} `}>
                                                <p className="text-sm  text-gray-700  tracking-wider pt-1 rounded rounded-md capitalize truncate cursor-pointer" onClick={() => handleModal(m)} >{m.ingredientes.join(', ')}</p>
                                            </div>
                                        }

                                        <div className={`${!m.imagen ? 'col-start-1 col-span-4' : 'col-start-2 col-span-3'} col-span-3 flex items-center justify-between pt-1   `}>
                                            <p className="text-gray-800 tracking-wider text-base sm:text-xl font-semibold  inline-block pt-1 cursor-pointer" onClick={() => handleModal(m)}>{m.precio === 0 ? ' Consular Precio' : `$${m.precio}`}</p>
                                            {/* <BiPlus className="text-2xl cursor-pointer text-primary bg-bgPrice rounded shadow shadow-black" /> */}
                                        </div>
                                    </div>
                                    {
                                        modalOpen && selectedModal?.nombre === m.nombre &&
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
