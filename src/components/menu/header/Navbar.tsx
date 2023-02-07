import { useAppDispatch } from "@/app/hooks"
import { Logo } from "@/components/media/Logo"
import { Categoria } from "@/interfaces"
import React, { useEffect, useState } from "react"
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { OrderAndFilter } from "../orderAndFilter/OrderAndFilter"

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

    const dispatch = useAppDispatch()

    useEffect(() => {

        if (currentTime < 11) {
            setCategoriaPorHorario(categoriaDesayunoMerienda)
        }

        if (currentTime >= 11 && currentTime < 15) {
            setCategoriaPorHorario(categoriaAlmuerzoCena)
        }

        if (currentTime >= 15 && currentTime < 20) {
            setCategoriaPorHorario(categoriaDesayunoMerienda)
        }

        if (currentTime >= 20) {
            setCategoriaPorHorario(categoriaAlmuerzoCena)
        }

    }, [currentTime])

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(e.target.value);
    }

    return (
        <div className="navbar text-white sticky top-0 pt-1" >
            <div className="flex items-center justify-between ">
                <div className="">
                    <Logo />
                </div>
                <div >
                    <button className="flex items-center pr-3" onClick={() => setOpen(true)} >
                        <HiOutlineMenuAlt4 className="text-4xl p-1 navbar text-white border border-white  rounded-md transition-all duration-300 ease-in-out transform active:scale-95" />
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden mx-auto">
                <div className="flex overflow-x-auto gap- xl:justify-around items-center " style={{ whiteSpace: 'nowrap' }}>
                    <span><AiOutlineCaretRight className="text-xl text-[#F1F2DF]" /></span>
                    {
                        categoriaPorHorario.map((menu, i) => (
                            <a key={i} href={`#${menu.name.slice(3)}`} className="mx-1 categoria uppercase w-auto p-1 text-xs text-center rounded-md mt-2 mb-2 tracking-wider bg-[#818853] text-white border border-white transition-all duration-300 ease-in-out transform active:scale-95" style={{ boxShadow: '-1px 1px 0px #818853', textShadow: '0px 2px 2px #000' }}>
                                {menu.name}
                            </a>
                        ))
                    }
                    <span><AiOutlineCaretLeft className="text-xl text-[#F1F2DF]" /></span>
                </div>
                <div className="flex justify-start  items-center mx-auto col-start-5 col-span-2 px-3 py-2">
                    <BiSearchAlt className="text-xl text-[#F1F2DF] rounded-l-md bg-[#818853] h-7 w-7 p-1" />
                    <input className="bg-[#F1F2DF] text-black h-7 w-full outline-none p-2 placeholder:text-gray-900 rounded-r-md  border-b-2 border-transparent transition-all duration-200 placeholder:text-start tracking-widest placeholder:text-sm placeholder:font-medium focus:outline-none focus:border-none" type={'text'} placeholder="Busca tu menu favorito..."  onChange={handleSearch} />
                </div>
            </div>
            <OrderAndFilter />
        </div>
    )
}
