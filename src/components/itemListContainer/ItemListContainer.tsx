import { Footer } from "../footer/Footer";
import { ItemList } from "../itemList/ItemList";
import { Menu } from "../menu/header/Menu";
import menuDelDia from "../../assets/menuDelDia.png"
import { useAppDispatch } from "@/app/hooks";
import { filtroPromos, filtroSinTacc } from "@/features/menuDigital/cartaSlice";

export const ItemListContainer = () => {

    const dispatch = useAppDispatch()

    const handleFilterMenuDelDia = () => {
        dispatch(filtroPromos())
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Menu />
            <ItemList />
            <img className="fixed bottom-6 right-1 logoMenuDelDia " width={100}  src={menuDelDia} alt="menu del dia" onClick={handleFilterMenuDelDia}/>
            <Footer />
        </>
    )
}
