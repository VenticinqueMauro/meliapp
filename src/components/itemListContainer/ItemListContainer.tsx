import { Carta2 } from "@/mock/mock2"
import { Menu } from "../menu/header/Menu"

export const ItemListContainer = () => {


    return (
        <>
            <Menu />
            <div className='mt-5 mb-5'>
                <h2 id='entradas' className="categoria bg-[#818853] uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-lg rounded-r-sm tracking-widerp pr-3 rounded-r-md" style={{ textShadow: '0px 1px 1px #000' }}>🥟 Entradas</h2>
                {
                    Carta2.entradas.map((menu, i) => (
                        <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end shadow '>
                            <div>
                                <p className="tracking-wider text-2xl font-medium ">{menu.name}</p>
                                {menu.variante &&
                                    <p className="text-lg text-gray-900 font-medium pt-1">{menu.variante.join(' / ')}</p>}
                                <p className="text-lg text-gray-700 font-light pt-1">{menu.ingredientes}</p>
                            </div>
                            <div>
                                <p className="pl-5">$2000</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mt-5 mb-5'>
                <h2 id='platoPrincipal' className="categoria bg-[#818853] uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-lg rounded-r-sm tracking-widerp pr-3 rounded-r-md" style={{ textShadow: '0px 1px 1px #000' }}>🍜 plato principal</h2>
                {
                    Carta2["plato principal"].map((menu, i) => (
                        <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end shadow'>
                            <div>
                                <p className="tracking-wider text-2xl font-medium ">{menu.name}</p>
                                <p className="text-lg text-gray-700 font-light pt-1">{menu.ingredientes}</p>
                            </div>
                            <div>
                                <p className="pl-5">$2000</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mt-2'>
                <h2 id='platoPrincipal' className="categoria bg-[#818853] uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-lg rounded-r-sm p pr-3 rounded-r-md" style={{ textShadow: '0px 1px 1px #000' }}>🍮 postres</h2>
                {
                    Carta2.postres.map((menu, i) => (
                        <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end shadow'>
                            <div>
                                <p className="tracking-wider text-2xl font-medium">{menu.name}</p>
                                <p className="text-lg text-gray-700 font-light pt-1">{menu.ingredientes}</p>
                            </div>
                            <div>
                                <p className="pl-5">$2000</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}
