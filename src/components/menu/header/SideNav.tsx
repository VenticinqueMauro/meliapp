import { Link } from 'react-router-dom'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { RiAdminLine } from 'react-icons/ri'


interface sideBarProps {
    open: Boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideNav: React.FC<sideBarProps> = ({ open, setOpen }) => {



    return (
        <div className={`${open ? 'w-64' : 'w-0'} bg-[#FFF8E6] shadow shadow-xl shadow-black sideBar min-h-screen fixed top-0 right-0 transition-all duration-300`}>
            <div className={`${!open && 'hidden'} flex items-center justify-between pt-3 px-3 p-1 `}>
                <Link to='/login' className='mb-5'>
                    <RiAdminLine className='text-3xl p-1' />
                </Link>
                <button className='mb-5' onClick={() => setOpen(false)}>
                    <MdOutlineRestaurantMenu className='text-4xl p-1  text-black' />
                </button>
            </div>
            <div className='text-center text-black p-2 text-lg hover:bg-[#FAC240] hover:text-white transition-all duration-200 cursor-pointer'>Link 1</div>
            <div className='text-center text-black p-2 text-lg hover:bg-[#FAC240] hover:text-white transition-all duration-200 cursor-pointer'>Link 2</div>
            <div className='text-center text-black p-2 text-lg hover:bg-[#FAC240] hover:text-white transition-all duration-200 cursor-pointer'>Link 3</div>

        </div>
    )
}

