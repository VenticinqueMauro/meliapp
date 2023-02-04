import { useState } from 'react'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Navbar } from './Navbar'



export const Sidebar = () => {


    const [open, setOpen] = useState(false)

    return (
            <>
                <Navbar setOpen={setOpen} />
                <div className={`${open ? 'w-64' : 'w-0'} bg-gray-100 shadow shadow-xl shadow-black sideBar min-h-screen fixed top-0 right-0 transition-all duration-300`}>
                    <div className={`${!open && 'hidden'} text-end pt-3 px-4 p-1`}>
                        <button className='mb-5' onClick={() => setOpen(false)}>
                            <MdOutlineRestaurantMenu className='text-4xl p-1  text-black' />
                        </button>
                    </div>
                    <div className='text-center text-sky-800 p-2 text-lg hover:bg-orange-400 cursor-pointer '>Ivone del Yucone</div>
                    <div className='text-center text-sky-800 p-2 text-lg hover:bg-orange-400 cursor-pointer '>Sofia</div>
                    <div className='text-center text-sky-800 p-2 text-lg hover:bg-orange-400 cursor-pointer '>Eña</div>
                </div>
            </>
    )
}
