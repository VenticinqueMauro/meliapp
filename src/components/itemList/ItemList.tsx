import { useAppSelector } from "@/app/hooks";
import { selectCarta } from "@/features/menuDigital/cartaSlice";

export const ItemList = () => {

    const Carta = useAppSelector(selectCarta)

    return (
        <>
            <div className='pt-5 min-h-screen'>
                {
                    Carta.map(menu => (
                        <div key={menu.categoria} id={`${menu.categoria.slice(3)}`} >
                            <h2  className="categoria bg-secondary uppercase text-white shadow shadow-black inline-block p-1 text-xl tracking-widerp pr-3 rounded-r-md" style={{ textShadow: '0px 1px 1px #000' }}>{menu.categoria}</h2>
                            {menu.menus.map(m => (
                                <div key={m.nombre} className='px-3 pt-3 pb-3 flex justify-between items-end shadow capitalize'>
                                    <div>
                                        <p className="tracking-wider text-2xl font-medium ">{m.nombre}</p>
                                        <p className="text-lg text-gray-700 font-medium pt-1">{m.ingredientes.join(', ')}</p>
                                    </div>
                                    <div>
                                        <p className="ml-5 text-white text-xl p-1 font-semibold bg-bgPrice shadow shadow-black rounded-xl" >${m.precio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
