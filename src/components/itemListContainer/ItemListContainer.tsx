import { useAppDispatch } from "@/app/hooks";
import { filtroPromos } from "@/features/menuDigital/cartaSlice";
import menuDelDia from "../../assets/menuDelDia.png";
import { Footer } from "../footer/Footer";
import { ItemList } from "../itemList/ItemList";
import { Menu } from "../menu/header/Menu";
import { BsWhatsapp } from 'react-icons/bs'

export const ItemListContainer = () => {

    // const dispatch = useAppDispatch()

    // const handleFilterMenuDelDia = () => {
    //     dispatch(filtroPromos())
    //     window.scrollTo(0, 0);
    // }

    return (
        <>
            <Menu />
            <ItemList />
            <a href="https://wa.me/+5493814034946?text=👋 Hola, estoy interesad@ en obtener más información sobre tus productos!" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 lg:bottom-4 lg:right-4 z-50 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 animate-bounce infinite delay-2000">
                <BsWhatsapp className='text-2xl lg:text-3xl' />
            </a>
            <Footer />
        </>
    )
}
