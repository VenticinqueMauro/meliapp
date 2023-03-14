import { ICategoria } from '@/interfaces';
import { db, storage } from '@/main';
import { Dialog } from '@headlessui/react';
import { doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

export const ModalDelete = () => {

    const [menuData, setMenuData] = useState<ICategoria[]>([]);
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <>
            <button className="block px-4 py-2 text-sm cursor-pointer flex items-center gap-1 border-b text-red-500" onClick={() => setIsOpen(true)}>
                <AiOutlineDelete />
                <span>Eliminar Menú</span>
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-bgPrice text-white w-80 p-3 rounded-xl z-50'>
                <Dialog.Panel>
                    <Dialog.Title className='text-center text-2xl'>¿Eliminar menú?</Dialog.Title>
                    <Dialog.Description className='text-center mt-2'>
                        Esta acción no se puede revertir.
                    </Dialog.Description>
                    <div className="flex flex-row justify-evenly mt-3">
                        <button className='flex justify-start' onClick={() => setIsOpen(false)}>Cancel</button>
                        <button className='flex justify-end ' >Confirmar</button>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
};

