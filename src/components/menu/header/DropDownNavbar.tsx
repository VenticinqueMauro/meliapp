import { useAppDispatch } from "@/app/hooks";
import { logOutAdmin } from "@/features/menuDigital/cartaSlice";
import { Menu } from "@headlessui/react";
import { BiFoodMenu } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Dropdown() {


    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        dispatch(logOutAdmin())
        toast('Bye bye!', {
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
        navigate('/')
    }


    return (
        <Menu as="div" className="relative inline-block text-left z-50">
            <div>
                <Menu.Button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <p>Modo Admin</p>
                    <GiPadlock className="text-gray-100 text-xl" />
                </Menu.Button>
            </div>
            <Menu.Items className="shadow shadow-bgPrice absolute right-0 mt-2 w-44 origin-top-right bg-white rounded-md shadow-lg focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <Link to='/admin' className={`${active ? "bg-gray-600" : "text-gray-700"
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 border-b`} >
                                <BiFoodMenu />
                                <span>Panel Admin</span>
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link to='/admin/changePassword' className={`${active ? "bg-gray-600" : "text-gray-700"
                                } block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 border-b`} >
                                <RiLockPasswordLine />
                                <span className="text-sm">Cambiar Password</span>
                            </Link>
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
