import { Logo } from "./Logo"
import { Categoria } from "@/interfaces"
import { BiSearchAlt } from 'react-icons/bi'
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Categorias: Categoria[] = [
    {
        name: '🥟 entradas'
    },
    {
        name: '🧆 plato principal'
    },
    {
        name: '🍮 postres'
    },
    {
        name: '🍝 pastas'
    },
    {
        name: '🥪 entrepanes'
    },
    {
        name: '🍟 minutas'
    },
    {
        name: '🥗 ensaladas'
    },
    {
        name: '🍕 pizzas'
    },
    {
        name: '🥃 bebidas'
    },
    {
        name: '☕ cafeteria'
    },
]

export const Navbar = () => {
    return (
        <div className="navbar text-white sticky top-0">
            <div className="flex items-center justify-between px-3">
                <div className="flex items-center pt-2">
                    <button><MdOutlineRestaurantMenu className="text-4xl p-1 border rounded-full" /></button>
                    <Logo />
                </div>
                <div className="flex items-center border-b-2 border-amber-500">
                    <input className="bg-transparent placeholder:text-white w-24 border-b-2 border-transparent transition-all duration-200 placeholder:text-start tracking-widest placeholder:text-sm focus:outline-none focus:border-none" type={'text'} placeholder="Buscar" />
                    <BiSearchAlt className="text-xl" />
                </div>
            </div>
            <div className="relative overflow-hidden mx-auto shadow shadow-gray-400">
                <div className="flex overflow-x-auto gap-1 xl:justify-center items-center" style={{ whiteSpace: 'nowrap' }}>
                    {
                        Categorias.map((menu, i) => (
                            // <a key={i} href={`#${menu.name.slice(3)}`}  className="mx-1 capitalize w-auto p-1  mt border  text-center rounded-lg mt-2 mb-2 shadow shadow-sm bg-black text-white font-semibold">
                            //     {menu.name} 
                            // </a>
                            <a key={i} href={`#${menu.name.slice(3)}`} className="mx-1 uppercase w-auto p-1  mt text-center rounded-lg mt-2 mb-2 shadow-sm bg-gray-100 text-black border border-amber-500 lg:hover:bg-gray-200 lg:focus:bg-gray-200 lg:active:bg-gray-200  transition-all duration-300 ease-in-out transform active:scale-95">
                                {menu.name}
                            </a>
                        ))
                    }
                </div>
                {/* <div className="flex items-center justify-between text-lg absolute bottom-0 w-full">
                    <BsArrowLeftShort />
                    <p className="text-xs">Deslizar</p>
                    <BsArrowRightShort />
                </div> */}
            </div>
        </div>
    )
}
