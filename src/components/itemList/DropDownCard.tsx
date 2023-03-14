import { Menu } from "@headlessui/react"
import { BiFoodMenu } from "react-icons/bi"
import { SlOptionsVertical } from "react-icons/sl"
import { Link } from "react-router-dom"
import { ModalDelete } from "./ModalDelete"

export const DropDownCard = () => {
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
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 border-b`} >
                                <BiFoodMenu />
                                <span>Editar Menú</span>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        <ModalDelete />
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    )
}
