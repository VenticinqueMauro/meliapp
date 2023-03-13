import { useAppDispatch } from "@/app/hooks";
import { logOutAdmin } from "@/features/menuDigital/cartaSlice";
import { Menu } from "@headlessui/react";
import { BiFoodMenu } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Dropdown() {


    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(logOutAdmin())
        navigate('/login')
    }


    return (
        <Menu as="div" className="relative inline-block text-left z-50">
            <div>
                <Menu.Button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <p>Modo Admin</p>
                    <GiPadlock className="text-gray-100 text-xl" />
                </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right bg-white rounded-md shadow-lg focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <div className={`${active ? "bg-gray-600" : "text-gray-700"
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1`} >
                                <BiFoodMenu />
                                <span>Editar Menu</span>
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div className={`${active ? "bg-gray-600" : "text-gray-700"
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1`} >
                                <RiLockPasswordLine />
                                <span className="text-sm">Cambiar Password</span>
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div className={`${active ? "bg-gray-600" : "text-gray-700"
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1`} onClick={handleLogOut}>
                                <MdLogout />
                                <span>Log Out</span>
                            </div>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    );
}

export default Dropdown;
