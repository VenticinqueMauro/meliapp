import { ICategoria, IMenu } from "@/interfaces"
import { Menu } from "@headlessui/react"
import { useState } from "react"
import { BiFoodMenu } from "react-icons/bi"
import { SlOptionsVertical } from "react-icons/sl"
import { Link } from "react-router-dom"
import { EditarPlatos } from "../admin/EditarPlatos"
import { ModalDelete } from "./ModalDelete"

interface DropwDownCardProps {
    categoria: string;
    nombre: string;
    menu: IMenu
    data: ICategoria[]
}

export const DropDownCard: React.FC<DropwDownCardProps> = ({ categoria, nombre, menu, data }) => {

    const [editMenu, setEditMenu] = useState(false)


    return (
        <>
            <Menu as="div" className="relative inline-block text-left ">
                <div>
                    <Menu.Button className="flex justify-end font-medium text-black">
                        <SlOptionsVertical />
                    </Menu.Button>
                </div>
                <Menu.Items className="shadow shadow-bgPrice absolute right-0 mt-2 w-44 origin-top-right bg-white rounded-md shadow-lg focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? "bg-gray-600" : "text-gray-700"
                                    } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 border-b hover:text-white z-50 `} onClick={() => setEditMenu(true)}>
                                    <BiFoodMenu />
                                    <span>Editar Menú</span>
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            <ModalDelete categoria={categoria} nombre={nombre} data={data} />
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>
            {
                editMenu ?
                    <EditarPlatos categoria={categoria} menu={menu} setEditMenu={setEditMenu} />
                    :
                    null
            }
        </>
    )
}
