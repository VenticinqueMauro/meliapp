import { useAppDispatch } from '@/app/hooks'
import { filtroPopulares, filtroPromos, filtroSinTacc, filtroVegetarianos } from '@/features/menuDigital/cartaSlice'
import { Menu } from '@headlessui/react'
import { MdKeyboardBackspace } from 'react-icons/md'

interface OrderProps {
    openFilter: boolean
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal: React.FC<OrderProps> = ({ openFilter, setOpenFilter }) => {


    const dispatch = useAppDispatch()

    const handleFilterPopulares = () => {
        dispatch(filtroPopulares())
        setOpenFilter(false)
    }

    const handleFilterPromos = () => {
        dispatch(filtroPromos())
        setOpenFilter(false)
    }

    const handleFilterVegetarianos = () => {
        dispatch(filtroVegetarianos())
        setOpenFilter(false)
    }

    const handleFilterSinTacc = () => {
        dispatch(filtroSinTacc())
        setOpenFilter(false)
    }




    return (
        <div className={`fixed inset-0 ${openFilter ? 'h-screen' : 'h-0'} pt-3 text-black bg-gray-100 overflow-auto z-50`}>
            <MdKeyboardBackspace className='mx-3 text-3xl cursor-pointer' onClick={() => setOpenFilter(false)} />
            <p className="text-center text-3xl p-5">Filtrar Por</p>
            <Menu>
                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full' onClick={() => handleFilterPromos()}>
                    <span>Promociones</span>
                </Menu.Button>

                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full' onClick={() => handleFilterPopulares()}>
                    <span>Recomendados</span>
                </Menu.Button>

                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full' onClick={() => handleFilterVegetarianos()}>
                    <span>Vegetarianos</span>
                </Menu.Button>

                <Menu.Button className='border-t-2 pt-3 pb-3 mx-3 px-1 flex items-center text-lg w-full' onClick={() => handleFilterSinTacc()}>
                    <span>Sin T.A.C.C</span>
                </Menu.Button>
            </Menu >
        </div >
    )
}