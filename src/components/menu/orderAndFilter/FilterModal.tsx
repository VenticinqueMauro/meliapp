import { Menu } from '@headlessui/react'
import { MdKeyboardBackspace, MdOutlineKeyboardArrowDown } from 'react-icons/md'

interface OrderProps {
    openFilter: boolean
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal: React.FC<OrderProps> = ({ openFilter, setOpenFilter }) => {

    const ingredientes = [
        {
            "ingredientes_con_carnes": [
                { "nombre": "Pollo" },
                { "nombre": "Cerdo" },
                { "nombre": "Res" },
                { "nombre": "Salchicha" },
                { "nombre": "Jamón" },
                { "nombre": "Carne de caballo" },
                { "nombre": "Carne de cordero" },
                { "nombre": "Carne de alce" },
                { "nombre": "Carne de venado" },
                { "nombre": "Carne de cabra" }
            ],
            "ingredientes_sin_carnes": [
                { "nombre": "Tofu" },
                { "nombre": "Frijoles" },
                { "nombre": "Lentejas" },
                { "nombre": "Garbanzos" },
                { "nombre": "Arroz" },
                { "nombre": "Quinoa" },
                { "nombre": "Brócoli" },
                { "nombre": "Calabacín" },
                { "nombre": "Espinacas" },
                { "nombre": "Pimientos" }
            ]
        }
    ]


    return (
        <div className={`fixed inset-0 ${openFilter ? 'h-screen' : 'h-0'} pt-3 text-black bg-gray-100 overflow-auto`}>
            <MdKeyboardBackspace className='mx-3 text-3xl cursor-pointer' onClick={() => setOpenFilter(false)} />
            <p className="text-center text-3xl p-5">Filtrar Por</p>
            <Menu>
                <Menu.Button className='border-t-2 pt-3 pb-3 px-3 flex items-center text-lg w-full'>
                    <span>Categoria</span>
                    <MdOutlineKeyboardArrowDown />
                </Menu.Button>
                <Menu.Items className='flex flex-col border '>
                    <Menu.Item>
                        <span className='mt-2 p-1 border-l-4 border-gray-300 hover:border-l-cyan-600'>🍗 Con Carne</span>
                    </Menu.Item>
                    <Menu.Item>
                        <span className='mt-2 p-1 border-l-4 border-gray-300'>🥗 Sin Carne</span>
                    </Menu.Item>
                </Menu.Items>
            </Menu >
            <Menu>
                <Menu.Button className='border-t-2 pt-3 pb-3 px-3 flex items-center text-lg w-full'>
                    <span>Ingredientes</span>
                    <MdOutlineKeyboardArrowDown />
                </Menu.Button>
                <Menu.Items className='flex flex-col border'>
                    {
                        ingredientes.map((item, i) => (
                            <Menu.Items key={i} className='flex flex-col border'>
                                {
                                    item.ingredientes_con_carnes.map((item, i) => (
                                        <span key={i} className='mt-2 p-1 text-gray-600 text-sm px-3'>{item.nombre}</span>
                                    ))
                                }
                                {
                                    item.ingredientes_sin_carnes.map((item, i) => (
                                        <span key={i} className='mt-2 p-1 text-gray-600 text-sm px-3'>{item.nombre}</span>
                                    ))
                                }
                            </Menu.Items>
                        ))
                    }
                </Menu.Items>
            </Menu >
        </div >
    )
}