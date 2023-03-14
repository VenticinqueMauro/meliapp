import { ICategoria, IMenu } from "@/interfaces";
import { db, storage } from "@/main";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { EditarPlatos } from "./EditarPlatos";
import promo from '../../assets/sale.svg'
import popular from '../../assets/popular.svg'


export const ListadoPlatos = () => {

    const [menuData, setMenuData] = useState<ICategoria[]>([]);
    const [edit, setEdit] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState<IMenu | null>(null)

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

        // Si el campo 'imagen' está en el objeto 'menu' en Firestore
        const imagenURL = menus[categoriaIndex].menus[menuIndex].imagen;

        menus[categoriaIndex].menus.splice(menuIndex, 1);
        setMenuData(menus);
        const categoriaVacia = menus[categoriaIndex].menus.length === 0;
        if (categoriaVacia) {
            menus.splice(categoriaIndex, 1);
        }
        const menuRef = doc(db, "Menus", "Prueba");

        // eliminar la imagen del almacenamiento de Firebase antes de actualizar el menú
        if (imagenURL) {
            const imagenRef = ref(storage, imagenURL);
            await deleteObject(imagenRef);
        }

        await updateDoc(menuRef, { menus: menus });
        toast.success("¡Menú eliminado con éxito!")
    };




    const handleEdit = (menu: IMenu) => {
        setSelectedMenu(menu)
        setEdit(!edit)
    }

    return (
        <div className='flex justify-around items-center max-w-7xl mx-auto gap-4 flex-wrap relative'>
            {
                menuData && menuData.length > 0 ?
                    menuData.map((categoria) => (
                        categoria.menus.map((menu) => (
                            <div key={menu.nombre} className='grid grid-cols-3 max-w-md gap-4 mx-auto bg-gray-100 inline-block mt-10 relative'>
                                {
                                    menu.imagen &&
                                    <div className="col-span-1 row-span-2 relative">
                                        <img className="w-full" src={menu.imagen} alt={menu.nombre} />
                                        <p className=" px-1 text-white text-lg font-semibold bg-bgPrice shadow  shadow-black rounded-sm mr-1 inline-block absolute top-0 right-0" >${menu.precio}</p>
                                    </div>
                                }
                                <div className="col-span-2">
                                    <div className="flex items-center justify-start gap-1">
                                        {menu.esPromo === true && <img className="w-5 h-5" src={promo} alt='offer' />}
                                        {menu.esPopular === true && <img className="w-5 h-5" src={popular} alt='offer' />}
                                        <p className="tracking-wider text-lg sm:text-xl font-bold inline-block  text-bgPrice underline"  >{menu.nombre}</p>
                                    </div>
                                    <p className="text-base sm:text-lg text-stone-800 font-medium tracking-wider pt-1 rounded rounded-md truncate" >{menu.ingredientes.join(', ')}</p>
                                </div>
                                <button className="bg-red-900 shadow shadow-black text-white inline-block absolute top-0 right-0 px-2" onClick={() => handleDeleteMenu(categoria.categoria, menu.nombre)}>x</button>
                                <button className="bg-red-900 shadow shadow-black text-white inline-block absolute top-7 right-0 px-2" onClick={() => handleEdit(menu)}>Edit</button>
                                {
                                    edit && selectedMenu && selectedMenu.nombre === menu.nombre && <EditarPlatos categoria={categoria.categoria} menu={menu} setEdit={setEdit} />
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
