import { TbArrowsUpDown } from 'react-icons/tb'
import { RiFilter2Line } from 'react-icons/ri'
import { OrderModal } from './OrderModal'
import { useState } from 'react'
import { FilterModal } from './FilterModal'
import { AiFillDelete } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { removeFilter, selectCarta } from '@/features/menuDigital/cartaSlice'


export const OrderAndFilter = () => {


    const dispatch = useAppDispatch()
    const { filtroActual } = useAppSelector(selectCarta)
    const [openOrder, setOpenOrder] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)


    return (
        <>
            <div className="flex justify-around items-center p-1 bg-primary text-bgPrice border-b-2 border-black/80 tracking-wider ">
                <div className='flex items-center gap-1 text-sm cursor-pointer font-medium'>
                    <span><TbArrowsUpDown /></span>
                    <span onClick={() => setOpenOrder(true)}>Ordernar</span>
                </div>
                <div className="border-r-2 border-bgPrice"></div>
                <div className='flex items-center gap-1 text-sm cursor-pointer font-medium'>
                    <span><RiFilter2Line /></span>
                    <span onClick={() => setOpenFilter(true)}>Filtrar</span>
                </div>
            </div>
            {
                filtroActual !== 'ninguno' ? (
                    <div className='flex justify-center items-center text-red-500 bg-primary cursor-pointer' onClick={() => dispatch(removeFilter())}>
                        <span className='text-sm'>Eliminar Filtros</span>
                        <AiFillDelete />
                    </div>
                ) : null
            }
            {
                openOrder &&
                <OrderModal openOrder={openOrder} setOpenOrder={setOpenOrder} />
            }
            {
                openFilter &&
                <FilterModal openFilter={openFilter} setOpenFilter={setOpenFilter} />
            }
        </>
    )
}
