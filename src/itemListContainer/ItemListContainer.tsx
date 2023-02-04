import { Carta2 } from "@/mock/mock2"

export const ItemListContainer = () => {


    return (
        <>
            <div>
                <div className='mt-5 mb-5'>
                    <h2 id='entradas' className=" titulo bg-cyan-500 uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-md rounded-r-sm tracking-widest" style={{ textShadow: '0px 1px 1px #000' }}>🥟 Entradas</h2>
                    {
                        Carta2.entradas.map((menu, i) => (
                            <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end shadow '>
                                <div>
                                    <p className="tracking-widest text-lg">{menu.name}</p>
                                    {menu.variante &&
                                        <p  className="text-md text-gray-700 pt-1">{menu.variante.join(' / ')}</p> }
                                    <p className="text-md text-gray-900 font-light pt-1">{menu.ingredientes}</p>
                                </div>
                                <div>
                                <p className="pl-5">$2000</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-5 mb-5'>
                    <h2 id='platoPrincipal' className=" titulo bg-cyan-500 uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-md rounded-r-sm tracking-widest" style={{ textShadow: '0px 1px 1px #000' }}>🍜 plato principal</h2>
                    {
                        Carta2["plato principal"].map((menu, i) => (
                            <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end shadow'>
                                <div>
                                    <p className="tracking-widest text-lg">{menu.name}</p> 
                                    <p className="text-md text-gray-900 font-light pt-1">{menu.ingredientes}</p>
                                </div>
                                <div>
                                    <p className="pl-5">$2000</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-2'>
                    <h2 id='platoPrincipal' className=" titulo bg-cyan-500 uppercase text-white shadow shadow-black shadow-sm inline-block p-1 text-md rounded-r-sm " style={{ textShadow: '0px 1px 1px #000' }}>🍮 postres</h2>
                    {
                        Carta2.postres.map((menu, i) => (
                            <div key={i} className='px-3 pt-3 pb-3 flex justify-between items-end shadow'>
                                <div>
                                    <p className="tracking-widest">{menu.name}</p> 
                                    <p className="text-md text-gr text-lgay-900 font-light pt-1">{menu.ingredientes}</p>
                                </div>
                                <div>
                                    <p className="pl-5">$2000</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
