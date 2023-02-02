import { Categoria } from "@/interfaces"
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Logo } from "./Logo"

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

interface menuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const Navbar: React.FC<menuProps> = ({ setOpen }) => {


    return (
        <div className="navbar text-white sticky top-0 p-1">
            <div className="flex items-center justify-between px-3">
                <div className="w-32">
                    <Logo />
                </div>
                <div >
                    <button className="flex items-center" onClick={() => setOpen(true)} >
                        <MdOutlineRestaurantMenu className=" text-4xl p-1 navbar text-orange-300 border border-white  rounded-full transition-all duration-300 ease-in-out transform active:scale-95"  />
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden mx-auto">
                <div className="flex overflow-x-auto gap-1 xl:justify-center items-center" style={{ whiteSpace: 'nowrap' }}>
                    {
                        Categorias.map((menu, i) => (
                            <a key={i} href={`#${menu.name.slice(3)}`} className="mx-1 uppercase w-auto p-1 text-sm text-center rounded-lg mt-2 mb-2 bg-gray-100 text-black border border-white lg:hover:bg-gray-200 lg:focus:bg-gray-200 lg:active:bg-gray-200  transition-all duration-300 ease-in-out transform active:scale-95" style={{boxShadow: '-1px 1px 0px #fdba74'}}>
                                {menu.name}
                            </a>
                        ))
                    }
                </div>
                <div className="flex justify-start gap-1 items-center mx-auto col-start-5 col-span-2 px-3">
                    <BiSearchAlt className="text-xl text-orange-300" />
                    <input className="bg-transparent h-6 outline-none placeholder:text-white  border-b-2 border-transparent transition-all duration-200 placeholder:text-start tracking-widest placeholder:text-xs focus:outline-none focus:border-none" type={'text'} placeholder="Busca tu menu favorito..." />
                </div>
            </div>
        </div>
    )
}
