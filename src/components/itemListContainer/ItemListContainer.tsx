import { ItemList } from "../itemList/ItemList";
import { Menu } from "../menu/header/Menu";

export const ItemListContainer = () => {



    // return (
    //     <div style={{ marginTop: `${navbarHeight}px` }}>
    //         {/* Contenido de la sección de la categoría */}
    //     </div>
    // );


    return (
        <>
            <Menu />
            <ItemList />
        </>
    )
}
