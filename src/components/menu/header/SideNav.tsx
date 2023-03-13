import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'


interface sideBarProps {
    open: Boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideNav: React.FC<sideBarProps> = ({ open, setOpen }) => {



    return (
        <div className={`${open ? 'w-64' : 'w-0'} bg-primary shadow shadow-xl shadow-black sideBar min-h-screen fixed top-0 right-0 transition-all duration-300 z-50`}>
            <div className={`${!open && 'hidden'} flex items-center justify-end pt-3 px-3 p-1 `}>
                <button className='mb-5' onClick={() => setOpen(false)}>
                    <MdOutlineRestaurantMenu className='text-4xl p-1  text-black' />
                </button>
            </div>
            <div className='text-center text-black p-2 text-lg hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>Promos</div>
            <div className='text-center text-black p-2 text-lg hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>Info</div>
            <div className='text-center text-black p-2 text-lg hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>Redes</div>
        </div>
    )
}

