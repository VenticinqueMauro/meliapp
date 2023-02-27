import { useAppSelector } from "@/app/hooks";
import { selectCarta } from "@/features/menuDigital/cartaSlice";
import { IoStarSharp } from 'react-icons/io5'
import { MdLocalOffer } from 'react-icons/md'

export const ItemList = () => {


    const Carta = useAppSelector(selectCarta)



    return (
        <div className="containerAll">
            <div className='min-h-screen lg:px-12 pt-1'>
                {
                    Carta.map(menu => (
                        <div key={menu.categoria} id={`${menu.categoria.slice(3)}`} className='card'>
                            <h2 className="categoria bg-bgPrice/95 inline uppercase  mx-auto text-white text-lg sm:text-xl tracking-widest px-3 rounded-r-sm text-center font-bold b" style={{ textShadow: '0px 1px 1px #000', boxShadow: '0px 0px 2px #000' }}>{menu.categoria}</h2>
                            {menu.menus.map(m => (

                                <div key={m.nombre} className='pt-3 pb-3 flex justify-between items-end capitalize px-3'>
                                    <div>
                                        <div className="flex items-center justify-start">
                                            {m.esOferta === true && <MdLocalOffer />}
                                            {m.esPopular === true && <IoStarSharp />}
                                            <p className="tracking-wider text-lg sm:text-xl font-bold inline-block  text-bgPrice underline"  >{m.nombre}</p>
                                        </div>
                                        <p className="text-base sm:text-lg text-stone-800 font-medium tracking-wider pt-1 rounded rounded-md" >{m.ingredientes.join(', ')}</p>
                                    </div>
                                    <div>
                                        <p className="px-1 ml-5 text-white text-lg sm:text-xl  font-semibold bg-bgPrice shadow shadow-black rounded-sm mr-1 border-2 border-secondary" >${m.precio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


