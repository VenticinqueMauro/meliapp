import { useAppSelector } from '@/app/hooks'
import { selectCarta } from '@/features/menuDigital/cartaSlice'
import { GiPadlockOpen } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'


interface sideBarProps {
    open: Boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideNav: React.FC<sideBarProps> = ({ open, setOpen }) => {

    const {adminLogged} = useAppSelector(selectCarta)

    return (
        <div className={`${open ? 'w-64' : 'w-0'} bg-primary shadow shadow-xl shadow-black    min-h-screen fixed top-0 right-0 transition-all duration-300 z-50`}>
            <div className={`${!open && 'hidden'} flex items-center justify-between pt-3 px-3 p-1 `}>
                <Link to='/login' className="flex items-center gap-1 mb-5">
                    {!adminLogged && <GiPadlockOpen className="text-black text-xl " />}
                </Link>
                <button className='mb-5' onClick={() => setOpen(false)}>
                    <MdOutlineRestaurantMenu className='text-4xl p-1  text-black' />
                </button>
            </div>
            <div className='text-center text-black p-2 text-lg hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>Promos</div>
            <div className='text-center text-black p-2 text-lg hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>Info</div>
            <div className='text-center text-black p-2 text-lg hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer'>Redes</div>
        </div >
    )
}

