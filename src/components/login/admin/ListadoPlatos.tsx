import { ICategoria } from "@/interfaces";
import { db } from "@/main";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import promo from '../../../assets/sale.svg';
import popular from '../../../assets/star.svg';
import { EditarPlatos } from "./EditarPlatos";

export const ListadoPlatos = () => {

    const [menuData, setMenuData] = useState<ICategoria[]>([]);
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        const getMenuData = async () => {
            try {
                const docRef = doc(db, "Menus", "Prueba");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setMenuData(docSnap.data().menus);
                }
            } catch (error) {
                console.error(error);   
            }
        };

        getMenuData();
    }, [menuData]);


    const handleDeleteMenu = async (categoria: string, nombre: string) => {
        const menus = [...menuData];
        const categoriaIndex = menus.findIndex((c) => c.categoria === categoria);
        const menuIndex = menus[categoriaIndex].menus.findIndex((m) => m.nombre === nombre);
        menus[categoriaIndex].menus.splice(menuIndex, 1);
        setMenuData(menus);
        const categoriaVacia = menus[categoriaIndex].menus.length === 0;
        if (categoriaVacia) {
            menus.splice(categoriaIndex, 1);
        }
        const menuRef = doc(db, "Menus", "Prueba");
        await updateDoc(menuRef, { menus: menus });
    };


    return (
        <div className="flex justify-around items-center max-w-7xl mx-auto gap-4 flex-wrap">
            {
                menuData && menuData.length > 0 ?
                    menuData.map((categoria) => (
                        categoria.menus.map((menu) => (
                            <div key={menu.nombre} className='grid grid-cols-3 max-w-md gap-4 mx-auto bg-gray-100 inline-block mt-10 relative'>
                                <div className="col-span-1 row-span-2 relative">
                                    <img className="w-full" src="https://resizer.glanacion.com/resizer/aDuSrK-kFy1v27LtOHPRYl4QlRs=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/RHVGX3MHVRB7VGEXBEVCCZHW5I.jpg" alt="" />
                                    <p className=" px-1 text-white text-lg font-semibold bg-bgPrice shadow  shadow-black rounded-sm mr-1 inline-block absolute top-0 right-0" >${menu.precio}</p>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex items-center justify-start gap-1">
                                        {menu.esPromo === true && <img className="w-5 h-5" src={promo} alt='offer' />}
                                        {menu.esPopular === true && <img className="w-5 h-5" src={popular} alt='offer' />}
                                        <p className="tracking-wider text-lg sm:text-xl font-bold inline-block  text-bgPrice underline"  >{menu.nombre}</p>
                                    </div>
                                    <p className="text-base sm:text-lg text-stone-800 font-medium tracking-wider pt-1 rounded rounded-md" >{menu.ingredientes.join(', ')}</p>
                                </div>
                                <button className="bg-red-900 shadow shadow-black text-white inline-block absolute top-0 right-0 px-2" onClick={() => handleDeleteMenu(categoria.categoria, menu.nombre)}>x</button>
                                <button className="bg-red-900 shadow shadow-black text-white inline-block absolute top-7 right-0 px-2" onClick={() => setEdit(!edit)}>Edit</button>
                                {
                                    edit && <EditarPlatos categoria={categoria.categoria} menu={menu} />
                                    
                                }
                            </div>
                        ))
                    ))
                    :
                    <p className="text-xl text-center">Listado Vacio</p>
            }
        </div>
    )

}
