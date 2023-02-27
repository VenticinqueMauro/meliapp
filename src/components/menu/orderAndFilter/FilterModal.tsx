import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { filtroOfertas, filtroPopulares, filtroPorIngredientes, removeFilter, selectCarta } from '@/features/menuDigital/cartaSlice'
import { Menu } from '@headlessui/react'
import { useEffect } from 'react'
import { MdKeyboardBackspace, MdOutlineKeyboardArrowDown } from 'react-icons/md'

interface OrderProps {
    openFilter: boolean
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal: React.FC<OrderProps> = ({ openFilter, setOpenFilter }) => {


    const Carta = useAppSelector(selectCarta)
    const dispatch = useAppDispatch()

    const handleFilterIngredientes = (ing: string) => {
        dispatch(filtroPorIngredientes(ing))
        setOpenFilter(false)
    } 

    const handleFilterPopulares = () => {
        dispatch(filtroPopulares())
        setOpenFilter(false)
    } 

    const handleFilterOfertas = () => {
        dispatch(filtroOfertas())
        setOpenFilter(false)
    } 

    const handleRemoveFilter = () => {
        dispatch(removeFilter())
        setOpenFilter(false)
    }

    useEffect(() => {
        dispatch(removeFilter())
    }, [])

    return (
        <div className={`fixed inset-0 ${openFilter ? 'h-screen' : 'h-0'} pt-3 text-black bg-gray-100 overflow-auto`}>
            <MdKeyboardBackspace className='mx-3 text-3xl cursor-pointer' onClick={() => setOpenFilter(false)} />
            <p className="text-center text-3xl p-5">Filtrar Por</p>
            <Menu>
                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full' onClick={() => handleFilterOfertas()}>
                    <span>Ofertas</span>
                </Menu.Button>

                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full' onClick={() => handleFilterPopulares()}>
                    <span>Populares</span>
                </Menu.Button>

                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full'>
                    <span>Ingredientes</span>
                    <MdOutlineKeyboardArrowDown />
                </Menu.Button>
                <Menu.Items className='flex flex-col border'>
                    <Menu.Items className='flex flex-col border'>
                        {
                            Carta.map(menu => menu.menus.map((m) => [...new Set(m.ingredientes)].map((ingredientes, i) => (
                                <button key={i} className='mt-2 p-1 text-gray-600 text-sm px-3 capitalize' onClick={() => handleFilterIngredientes(ingredientes)}>{ingredientes}</button>
                            ))))
                        }
                    </Menu.Items>
                </Menu.Items>
            </Menu >
            <Menu>
                <Menu.Button className='border-t-2 p-1  mx-auto px-1 rounded-md flex items-center text-lg w-auto text-white bg-black' onClick={handleRemoveFilter}>Remover Filtros</Menu.Button>
            </Menu>
        </div >
    )
}