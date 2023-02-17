import { useAppSelector } from "@/app/hooks";
import { selectCarta } from "@/features/menuDigital/cartaSlice";

export const ItemList = () => {


    const Carta = useAppSelector(selectCarta)

    

    return (
        <div className="containerAll ">
            <div className='bg-bgPrice/80 min-h-screen'>
                {
                    Carta.map(menu => (
                        <div key={menu.categoria} id={`${menu.categoria.slice(3)}`}>
                            <h2 className="categoria bg-bgPrice uppercase text-white border-t border-b p-1 text-xl tracking-widerp pr-3 text-center" style={{ textShadow: '0px 1px 1px #000' }}>{menu.categoria}</h2>
                            {menu.menus.map(m => (
                                <div key={m.nombre} className='pt-3 pb-3 flex justify-between items-end capitalize'>
                                    <div>
                                        <p className="tracking-wider text-xl font-medium inline-block px-3 text-secondary" style={{ textShadow: '1px 1px 1px #000' }}>{m.nombre}</p>
                                        <p className="text-md text-primary font-medium pt-1 px-3 rounded rounded-md" style={{ textShadow: '1px 1px 1px #000' }}>{m.ingredientes.join(', ')}</p>
                                    </div>
                                    <div>
                                        <p className="border border-2 border-secondary ml-5 text-white text-xl p-1 font-semibold bg-bgPrice shadow shadow-black rounded-md mr-1" >${m.precio}</p>
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


