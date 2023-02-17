import { TbArrowsUpDown } from 'react-icons/tb'
import { RiFilter2Line } from 'react-icons/ri'
import { OrderModal } from './OrderModal'
import { useState } from 'react'
import { FilterModal } from './FilterModal'


export const OrderAndFilter = () => {

    const [openOrder, setOpenOrder] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)


    return (
        <>
            <div className="flex justify-around p-2 bg-secondary text-black shadow shadow-black tracking-wider font-light">
                <div className='flex items-center gap-1 text-md cursor-pointer font-semibold'>
                    <span><TbArrowsUpDown /></span>
                    <span onClick={() => setOpenOrder(true)}>Ordernar</span>
                </div>
                <div className="border-r-2 border-black"></div>
                <div className='flex items-center gap-1 text-md cursor-pointer font-semibold'>
                    <span><RiFilter2Line /></span>
                    <span onClick={() => setOpenFilter(true)}>Filtrar</span>
                </div>
            </div>
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
