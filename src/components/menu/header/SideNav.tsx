import {MdOutlineRestaurantMenu} from 'react-icons/md'


interface sideBarProps{
    open: Boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideNav: React.FC<sideBarProps> = ({open, setOpen}) => {



    return (
        <div className={`${open ? 'w-64' : 'w-0'} bg-[#F1F2DF] shadow shadow-xl shadow-black sideBar min-h-screen fixed top-0 right-0 transition-all duration-300`}>
            <div className={`${!open && 'hidden'} text-end pt-3 px-4 p-1`}>
                <button className='mb-5' onClick={() => setOpen(false)}>
                    <MdOutlineRestaurantMenu className='text-4xl p-1  text-black' />
                </button>
            </div>
            <div className='text-center text-black p-2 text-lg hover:bg-[#818853] hover:text-white transition-all duration-200 cursor-pointer'>Ivone del Yucone</div>
            <div className='text-center text-black p-2 text-lg hover:bg-[#818853] hover:text-white transition-all duration-200 cursor-pointer'>Sofia</div>
            <div className='text-center text-black p-2 text-lg hover:bg-[#818853] hover:text-white transition-all duration-200 cursor-pointer'>Eña</div>
        </div> 
    )
}

