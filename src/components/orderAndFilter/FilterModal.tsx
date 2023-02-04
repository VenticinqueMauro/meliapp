import { MdKeyboardBackspace } from 'react-icons/md'

interface OrderProps {
    openFilter: boolean
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterModal: React.FC<OrderProps> = ({ openFilter, setOpenFilter }) => {


    return (
        <div className={`fixed inset-0 ${openFilter ? 'h-screen' : 'h-0'} pt-3 text-black bg-gray-100`}>
            <MdKeyboardBackspace className='mx-3 text-3xl cursor-pointer' onClick={() => setOpenFilter(false)} />
            <p className="text-center text-3xl p-5">Filtrar Por</p>
            <div className="border-t-2 pt-5 pb-3  px-3">
                <p>Categoria</p>
            </div>
            <div className="border-t-2 pt-3 pb-3  px-3">
                <p>Ingredientes</p>
            </div>
        </div>
    )
}