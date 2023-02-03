import { TbArrowsUpDown } from 'react-icons/tb'
import { RiFilter2Line } from 'react-icons/ri'


export const OrdenyFiltro = () => {


    return (
        <div className="flex justify-around p-2 bg-gray-50 text-cyan-700 tracking-wider font-light">
            <div className='flex items-center gap-1 text-base transition-all duration-100 lg:hover:font-normal'>
                <span><TbArrowsUpDown /></span>
                <span>Ordernar</span>
            </div>
            <div className="border-r-2 "></div>
            <div className='flex items-center gap-1 text-base transition-all duration-100 lg:hover:font-normal'>
                <span><RiFilter2Line /></span>
                <span>Filtrar</span>
            </div>
        </div>
    )
}
