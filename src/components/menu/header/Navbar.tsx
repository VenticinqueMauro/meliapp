import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { buscarMenu, selectCarta } from "@/features/menuDigital/cartaSlice"
import React, { useEffect, useState } from "react"
import { Link as Ruta } from 'react-scroll'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { BiSearchAlt, BiRestaurant } from 'react-icons/bi'
import { OrderAndFilter } from "../orderAndFilter/OrderAndFilter"

const categoriaAlmuerzoCena = [
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

const categoriaDesayunoMerienda = [...categoriaAlmuerzoCena].sort((a, b) => {
    const order = ['☕ cafeteria', '🥃 bebidas', '🥪 entrepanes', '🥟 entradas', '🍜 plato principal', '🍕 pizzas', '🍝 pastas', '🍳 minutas', '🥗 ensaladas', '🍮 postres'];
    return order.indexOf(a.name) - order.indexOf(b.name);
});

interface menuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const Navbar: React.FC<menuProps> = ({ setOpen }) => {

    const Carta = useAppSelector(selectCarta)

    const [categoriaPorHorario, setCategoriaPorHorario] = useState([])

    const currentTime = new Date().getHours()

    const dispatch = useAppDispatch()

    // useEffect(() => {

    //     if (currentTime < 11) {
    //         setCategoriaPorHorario(categoriaDesayunoMerienda)
    //     }

    //     if (currentTime >= 11 && currentTime < 15) {
    //         setCategoriaPorHorario(categoriaAlmuerzoCena)
    //     }

    //     if (currentTime >= 15 && currentTime < 20) {
    //         setCategoriaPorHorario(categoriaDesayunoMerienda)
    //     }

    //     if (currentTime >= 20) {
    //         setCategoriaPorHorario(categoriaAlmuerzoCena)
    //     }

    // }, [currentTime])


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(buscarMenu(e.target.value))
        console.log(e.target.value);
    }

    return (
        <div className="navbar text-white sticky top-0 pt-1 " >
            <div className="flex items-center justify-between py-2 ">
                <div className="">
                    {/* <img className="pl-3 w-16 p-1" src="https://cdn-icons-png.flaticon.com/512/5040/5040008.png" alt="logo" /> */}
                    <h2 className="pl-3 font-bold text-2xl">TU LOGO</h2>
                </div>
                <div >
                    <button className="flex items-center pr-3" onClick={() => setOpen(true)} >
                        <BiRestaurant className="text-4xl p-1 navbar text-primary  border border-secondary rounded-md transition-all duration-300 ease-in-out transform active:scale-95" />
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden mx-auto">
                <div className="flex overflow-x-auto gap- xl:justify-around items-center " style={{ whiteSpace: 'nowrap' }}>
                    <span><AiOutlineCaretRight className="text-xl text-primary" /></span>
                    {
                        Carta.map((menu, i) => (
                            <Ruta key={i} to={`${menu.categoria.slice(3)}`} spy={true} smooth={true} offset={-190} duration={500} className="mx-1 categoria uppercase w-auto p-1 text-sm text-center rounded-md mt-2 mb-2 tracking-wider bg-secondary text-white border border-primary transition-all duration-300 ease-in-out transform active:scale-95 " style={{ textShadow: '1px 1px 1px #000' }}>
                                {menu.categoria}
                            </Ruta>
                        ))
                    }
                    <span><AiOutlineCaretLeft className="text-xl text-primary" /></span>
                </div>
                <div className="flex justify-start  items-center mx-auto col-start-5 col-span-2 px-3 py-2">
                    <BiSearchAlt className="text-xl text-primary rounded-l-md border-t border-l border-b border-secondary bg-bgPrice h-7 w-7 p-1" />
                    <input className="bg-primary text-black h-7 w-full outline-none p-2 placeholder:text-gray-900 rounded-r-md  border-b-2 border-transparent transition-all duration-200 placeholder:text-start tracking-widest placeholder:text-sm placeholder:font-medium focus:outline-none focus:border-none" type={'text'} placeholder="Busca tu menú favorito..." onChange={handleSearch} />
                </div>
            </div>
            <OrderAndFilter />
        </div>
    )
}
