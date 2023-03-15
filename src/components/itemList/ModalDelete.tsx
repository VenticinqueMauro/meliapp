import { useAppDispatch } from '@/app/hooks';
import { eliminarMenu } from '@/features/menuDigital/cartaSlice';
import { ICategoria } from '@/interfaces';
import { db, storage } from '@/main';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref as refed } from 'firebase/storage';
import { forwardRef, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

interface ModalDeleteProps {
    categoria: string;
    nombre: string;
    data: ICategoria[]
}

export const ModalDelete = forwardRef((props: ModalDeleteProps, ref) => {

    const [menuData, setMenuData] = useState<ICategoria[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useAppDispatch()

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
    }, [props.data]);


    const handleDeleteMenu = async (categoria: string, nombre: string) => {
        
        const menus = [...menuData];
        const categoriaIndex = menus.findIndex((c) => c?.categoria === categoria);
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
            const imagenRef = refed(storage, imagenURL);
            await deleteObject(imagenRef);
        }

        await toast.promise(updateDoc(menuRef, { menus: menus }), {
            loading: 'Eliminando menú...',
            success: '¡Menú eliminado con éxito!',
            error: 'No se pudo eliminar el menú.',

        }, {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
        dispatch(eliminarMenu({categoria: props.categoria, nombre: props.nombre}))
        
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        handleDeleteMenu(props.categoria, props.nombre)
    }


    return (
        <>
            <button className="block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 text-red-500" onClick={() => setIsOpen(true)}>
                <AiOutlineDelete />
                <span>Eliminar Menú</span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-lg font-medium mb-2 text-center">¿Eliminar menú?</h2>
                        <p className="text-gray-500 text-sm mb-4">Esta acción no se puede revertir.</p>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="px-4 py-2 rounded-lg text-gray-500 border border-gray-500 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                                onClick={handleClick}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
});

