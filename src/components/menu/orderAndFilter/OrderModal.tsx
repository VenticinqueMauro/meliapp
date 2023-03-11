import { useAppDispatch } from '@/app/hooks'
import { filtroMayorPrecio, filtroMenorPrecio, filtroPrecioHasta } from '@/features/menuDigital/cartaSlice'
import React, { useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

interface OrderProps {
    openOrder: boolean
    setOpenOrder: React.Dispatch<React.SetStateAction<boolean>>
}

export const OrderModal: React.FC<OrderProps> = ({ openOrder, setOpenOrder }) => {

    const dispatch = useAppDispatch()

    const [precio, setPrecio] = useState<number>(0)


    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPrecio(Number(e.target.value))
    }

    const handleMenorPrecio = () => {
        dispatch(filtroMenorPrecio())
        setOpenOrder(false)
    }

    const handleMayorPrecio = () => {
        dispatch(filtroMayorPrecio())
        setOpenOrder(false)
    }
    

    const buscarPrecioHasta = () => {
        dispatch(filtroPrecioHasta(precio))
        setOpenOrder(false)
    }




    console.log(precio);

    return (
        <div className={`fixed inset-0 ${openOrder ? 'h-screen' : 'h-0'} pt-3 text-black bg-gray-100`}>
            <MdKeyboardBackspace className='mx-3 text-3xl cursor-pointer' onClick={() => setOpenOrder(false)} />
            <p className="text-center text-3xl p-5">Ordenar Por</p>
            <button className="border-t-2 pt-5 pb-3 block w-full text-start px-3" onClick={handleMenorPrecio}>
                Menor Precio
            </button>
            <button className="border-t-2 pt-3 pb-3 block w-full text-start px-3" onClick={handleMayorPrecio}>
                Mayor Precio
            </button>
            <div className="border-t-2 pt-3 pb-3  px-3 flex items-center flex-wrap" >
                <label>Hasta $</label>
                <div>
                    <input className='tracking-wider  px-1 placeholder:text-sm ' type='number' placeholder="Ingrese un monto" onChange={handlePrice} />
                    <button className='bg-black text-white px-1 rounded-r-sm' onClick={buscarPrecioHasta}>Buscar</button>
                </div>
            </div>
        </div>
    )
}
