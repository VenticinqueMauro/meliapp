import { ICategoria } from "@/interfaces"
import { Menu } from "@headlessui/react"
import { BiFoodMenu } from "react-icons/bi"
import { SlOptionsVertical } from "react-icons/sl"
import { Link } from "react-router-dom"
import { ModalDelete } from "./ModalDelete"

interface DropwDownCardProps{
    categoria: string;
    nombre: string;
    data: ICategoria[]
}

export const DropDownCard: React.FC<DropwDownCardProps> = ({categoria, nombre, data}) => {
    

    return (
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
                            <Link to='/' className={`${active ? "bg-gray-600" : "text-gray-700"
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 border-b hover:text-white z-50 `} >
                                <BiFoodMenu />
                                <span>Editar Menú</span>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        <ModalDelete categoria={categoria} nombre={nombre} data={data} />
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    )
}
