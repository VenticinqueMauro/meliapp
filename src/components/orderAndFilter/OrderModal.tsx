import { MdKeyboardBackspace } from 'react-icons/md'

interface OrderProps{
    openOrder: boolean
    setOpenOrder: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderModal: React.FC<OrderProps> = ({openOrder, setOpenOrder}) => {


    return (
        <div className={`fixed inset-0 ${openOrder ? 'h-screen' : 'h-0'} pt-3 text-black bg-gray-100`}>
            <MdKeyboardBackspace className='mx-3 text-3xl cursor-pointer' onClick={() => setOpenOrder(false)} />
            <p className="text-center text-3xl p-5">Ordenar Por</p>
            <div className="border-t-2 pt-5 pb-3  px-3">
                <p>Menor Precio</p>
            </div>
            <div className="border-t-2 pt-3 pb-3  px-3">
                <p>Mayor Precio</p>
            </div>
            <div className="border-t-2 pt-3 pb-3  px-3">
                <p>Precio Hasta $ <input className='tracking-wider px-1 placeholder:text-sm' type='text' placeholder="ingrese un monto" /></p>
            </div>
        </div>
    )
}
