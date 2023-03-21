import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { buscarMenu, selectCarta } from "@/features/menuDigital/cartaSlice"
import React from "react"
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { BiRestaurant, BiSearchAlt } from 'react-icons/bi'
import { Link as Ruta } from 'react-scroll'
import { OrderAndFilter } from "../orderAndFilter/OrderAndFilter"
import Dropdown from "./DropDownNavbar"



interface menuProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const Navbar: React.FC<menuProps> = ({ setOpen }) => {

    const { data, adminLogged } = useAppSelector(selectCarta)


    const dispatch = useAppDispatch()



    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(buscarMenu(e.target.value))
        console.log(e.target.value);
    }

    return (
        <div className="navbar text-white sticky top-0 pt-1 z-10 lg:px-12 " >
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between py-2 ">
                    <div className="">
                        <h2 className="pl-3 font-bold text-2xl">LaCarta</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        {
                            adminLogged && <Dropdown />

                        }
                        <button className="flex items-center pr-3" onClick={() => setOpen(true)} >
                            <BiRestaurant className="text-4xl p-1 navbar text-secondary  border border-primary rounded-md transition-all duration-300 ease-in-out transform active:scale-95" />
                        </button>
                    </div>
                </div>
                <div className="relative overflow-hidden mx-auto">
                    <div className="flex overflow-x-auto gap- xl:justify-around items-center " style={{ whiteSpace: 'nowrap' }}>
                        <span><AiOutlineCaretRight className="text-xl" /></span>
                        {
                            data &&
                            data.map((menu, i) => (
                                <Ruta key={i} to={`${menu.categoria.slice(3)}`} spy={true} smooth={true} offset={-180} duration={500} className="mx-1 categoria uppercase w-auto p-1 text-sm text-center rounded-md mt-2 mb-2 tracking-wider bg-gray-700 text-primary hover:text-secondary hover:bg-gray-700 transition-all duration-300 ease-in-out transform active:scale-95 font-medium" >
                                    {menu.categoria}
                                </Ruta>
                            ))
                        }
                        <span><AiOutlineCaretLeft className="text-xl text-primary" /></span>
                    </div>
                    <div className="flex justify-start  items-center mx-auto col-start-5 col-span-2 px-3 py-2">
                        <BiSearchAlt className="text-xl text-bgPrice rounded-l-md bg-primary h-6 w-7 p-1" />
                        <input className="bg-primary text-black h-6 w-full outline-none p-2 placeholder:text-gray-900 rounded-r-md  border-b-2 border-transparent transition-all duration-200 placeholder:text-start tracking-widest placeholder:text-sm placeholder:font-medium focus:outline-none focus:border-none" type={'text'} placeholder="Busca tu menú favorito..." onChange={handleSearch} />
                    </div>
                </div>
                <OrderAndFilter />
            </div>
        </div>
    )
}
