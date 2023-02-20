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
            <div className="flex justify-around p-1 bg-primary text-bgPrice border-b-2 border-black/80 tracking-wider ">
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
