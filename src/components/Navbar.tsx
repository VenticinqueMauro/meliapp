import { Categoria } from "@/interfaces"
import { BiSearchAlt } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'
import { Logo } from "./Logo"
import { useEffect, useState } from "react"

const categoriaAlmuerzoCena: Categoria[] = [
    {
        name: '🥟 entradas'
    },
    {
        name: '🍜 plato principal'
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
        name: '🍳 minutas'
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

const categoriaDesayunoMerienda: Categoria[] = [...categoriaAlmuerzoCena].sort((a, b) => {
    const order = ['☕ cafeteria', '🥃 bebidas', '🥪 entrepanes', '🥟 entradas', '🍜 plato principal', '🍕 pizzas', '🍝 pastas', '🍳 minutas', '🥗 ensaladas', '🍮 postres'];
    return order.indexOf(a.name) - order.indexOf(b.name);
});

interface menuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const Navbar: React.FC<menuProps> = ({ setOpen }) => {

    const [categoriaPorHorario, setCategoriaPorHorario] = useState<Categoria[]>([])

    const currentTime = new Date().getHours()

    useEffect(() => {

        if(currentTime < 11 ){
            setCategoriaPorHorario(categoriaDesayunoMerienda)
        }

        if(currentTime >= 11 && currentTime < 15){
            setCategoriaPorHorario(categoriaAlmuerzoCena)
        }

        if(currentTime >= 15 && currentTime < 20 ){
            setCategoriaPorHorario(categoriaDesayunoMerienda)
        }

        if(currentTime >= 20 ){
            setCategoriaPorHorario(categoriaAlmuerzoCena)
        }

    }, [currentTime])


    return (
        <div className="navbar text-white sticky top-0 pt-1" >
            <div className="flex items-center justify-between ">
                <div className="">
                    <Logo />
                </div>
                <div >
                    <button className="flex items-center pr-3" onClick={() => setOpen(true)} >
                        <HiOutlineMenuAlt4 className=" text-4xl p-1 navbar text-white border border-white  rounded-md transition-all duration-300 ease-in-out transform active:scale-95" />
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden mx-auto">
                <div className="flex overflow-x-auto gap- xl:justify-around items-center" style={{ whiteSpace: 'nowrap' }}>
                    <span><AiOutlineCaretRight className="text-xl text-orange-300" /></span>
                    {
                        categoriaPorHorario.map((menu, i) => (
                            <a key={i} href={`#${menu.name.slice(3)}`} className="mx-1 uppercase w-auto p-1 text-sm text-center rounded-lg mt-2 mb-2 bg-gray-50 text-black border border-white lg:hover:bg-gray-200 lg:focus:bg-gray-200 lg:active:bg-gray-200  transition-all duration-300 ease-in-out transform active:scale-95" style={{ boxShadow: '-1px 1px 0px #fdba74' }}>
                                {menu.name}
                            </a>
                        ))
                    }
                    <span><AiOutlineCaretLeft className="text-xl text-orange-300" /></span>
                </div>

                <div className="flex justify-start gap-1 items-center mx-auto col-start-5 col-span-2 pl-3 py-2">
                    <BiSearchAlt className="text-xl text-orange-300" />
                    <input className="bg-transparent h-6 outline-none placeholder:text-white  border-b-2 border-transparent transition-all duration-200 placeholder:text-start tracking-widest placeholder:text-xs focus:outline-none focus:border-none" type={'text'} placeholder="Busca tu menu favorito..." onChange={() => {}} />
                </div>
            </div>
        </div>
    )
}
