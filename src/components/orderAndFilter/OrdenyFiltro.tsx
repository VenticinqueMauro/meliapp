import { TbArrowsUpDown } from 'react-icons/tb'
import { RiFilter2Line } from 'react-icons/ri'
import { OrderModal } from './OrderModal'
import { useState } from 'react'
import { FilterModal } from './FilterModal'


export const OrdenyFiltro = () => {

    const [openOrder, setOpenOrder] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)


    return (
        <>
            <div className="flex justify-around p-2 bg-gray-50 text-cyan-700 tracking-wider font-light">
                <div className='flex items-center gap-1 text-base transition-all duration-100 lg:hover:font-normal cursor-pointer'>
                    <span><TbArrowsUpDown /></span>
                    <span onClick={() => setOpenOrder(true)}>Ordernar</span>
                </div>
                <div className="border-r-2 "></div>
                <div className='flex items-center gap-1 text-base transition-all duration-100 lg:hover:font-normal cursor-pointer'>
                    <span><RiFilter2Line /></span>
                    <span onClick={() => setOpenFilter(true)} >Filtrar</span>
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
