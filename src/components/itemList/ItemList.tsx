import { useAppSelector } from "@/app/hooks";
import { selectCarta } from "@/features/menuDigital/cartaSlice";

export const ItemList = () => {


    const Carta = useAppSelector(selectCarta)

    

    return (
        <div className="containerAll">
            <div className='min-h-screen max-w-7xl mx-auto'>
                {
                    Carta.map(menu => (
                        <div key={menu.categoria} id={`${menu.categoria.slice(3)}`} className='card'>
                            <h2 className="categoria bg-bgPrice/95 inline uppercase  mx-auto text-white text-xl tracking-widest px-3 rounded-r-md text-center font-bold b" style={{ textShadow: '0px 1px 1px #000', boxShadow: '0px 0px 2px #000' }}>{menu.categoria}</h2>
                            {menu.menus.map(m => (
                                <div key={m.nombre} className='pt-3 pb-3 flex justify-between items-end capitalize'>
                                    <div>
                                        <p className="tracking-wider text-xl font-semibold inline-block px-3 text-secondary" style={{textShadow: '1px 1px 1px #000'}} >{m.nombre}</p>
                                        <p className="text-lg text-stone-800 font-medium tracking-wide pt-1 px-3 rounded rounded-md" >{m.ingredientes.join(', ')}</p>
                                    </div>
                                    <div>
                                        <p className="border-2 border-secondary px-1 ml-5 text-white text-xl  font-semibold bg-bgPrice shadow shadow-black rounded-md mr-1" >${m.precio}</p>
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


