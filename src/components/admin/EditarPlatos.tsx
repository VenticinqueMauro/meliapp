import { IMenu } from "@/interfaces";
import { db, storage } from "@/main";
import { MAX_IMAGE_SIZE } from "@/utils/utils";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";



interface EditarPlatosProps {
    categoria: string;
    menu: IMenu;
    setEditMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditarPlatos = ({ categoria, menu, setEditMenu }: EditarPlatosProps): JSX.Element => {

    const [nombreCategoria, setNombreCategoria] = useState(categoria);
    const [image, setImage] = useState<string>('');
    const [formData, setFormData] = useState<IMenu>({
        nombre: menu.nombre,
        precio: menu.precio || 0,
        ingredientes: menu.ingredientes || [],
        esPopular: menu.esPopular || false,
        esPromo: menu.esPromo || false,
        esVegetariano: menu.esVegetariano || false,
        esSinTac: menu.esSinTac || false,
        imagen: menu.imagen || "",
    });

    const updateFormData = (name: string, value: any) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const uploadImageToFirebase = async (file: File) => {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        setImage(url);
        updateFormData('imagen', url);
    };

    const replaceImageInFirebase = async (newFile: File, oldImageUrl: string) => {
        // Delete old image
        const oldImageRef = ref(storage, oldImageUrl);
        await deleteObject(oldImageRef);

        // Upload new image
        const storageRef = ref(storage, `images/${newFile.name}`);
        await uploadBytes(storageRef, newFile);
        const url = await getDownloadURL(storageRef);
        setImage(url);
        updateFormData('imagen', url);
    };


    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Check if file size is greater than 2MB
        if (file.size > MAX_IMAGE_SIZE) {
            alert('El tamaño de la imagen es demasiado grande. El tamaño máximo permitido es de 2 MB.');
            return;
        }

        const extension = file.name.split('.').pop()?.toLowerCase();
        let format: 'JPEG' | 'PNG' = 'JPEG'; // Default to JPEG

        switch (extension) {
            case 'png':
                format = 'PNG';
                break;
            case 'jpeg':
            case 'jpg':
                format = 'JPEG';
                break;
        }

        // Check if there is an existing image and replace it
        if (formData.imagen) {
            const newFile = new File([file], file.name, { type: file.type, lastModified: new Date().getTime() });
            replaceImageInFirebase(newFile, formData.imagen);
        } else {
            uploadImageToFirebase(file);
        }
    };


    const handleChange = (e: ChangeEvent<HTMLInputElement> | MouseEvent<EventTarget>) => {
        const { name, value, checked, type } = e.target as HTMLInputElement;

        if (name === 'ingredientes') {
            const ingredientesArray = value.toLowerCase().split(',');
            setFormData({
                ...formData,
                [name]: ingredientesArray,
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value.toLocaleLowerCase(),
            });
        }
    };

    const handleNombreCategoriaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNombreCategoria(e.target.value);
    };

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const docRef = doc(db, "Menus", "Prueba");
            const docData = await getDoc(docRef);
            const menuData = docData.data()?.menus || [];

            // Busca el índice del menú que se va a modificar en la lista de menús
            const categoriaIndex = menuData.findIndex((c: { categoria: string }) => c.categoria === nombreCategoria);
            const menuIndex = menuData[categoriaIndex].menus.findIndex((m: { nombre: string }) => m.nombre === menu.nombre);

            // Actualiza el menú en la lista
            const newMenuData = [...menuData];
            newMenuData[categoriaIndex].menus[menuIndex] = formData;

            // Actualiza el documento de Firestore con la lista actualizada de menús
            await updateDoc(docRef, { menus: newMenuData });

            toast.success('¡Menú actualizado con éxito!', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        } catch (error) {
            toast.error('¡Error al actualizar el Menú!', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            console.error("Error:", error);
        }

        setEditMenu(false)
    };


    return (
        <div className=" w-full h-screen fixed top-0 left-0 containerAll z-40 overflow-hidden">
            <button className="flex items-center gap-1" onClick={() => setEditMenu(false)}>
                <MdKeyboardBackspace className="ml-6  text-4xl" />
            </button>
            <div className="fixed top-1/2 -translate-y-2/3 w-80 left-1/2 -translate-x-1/2">
                <h2 className="text-center text-2xl underline">Editar Menú</h2>
                <form className="flex flex-col gap-4 pt-10" onSubmit={handleFormSubmit}>
                    <div className="c">
                        <label className="block font-medium text-gray-700">Categoria</label>
                        <input type="text" value={categoria.toLocaleLowerCase()} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleNombreCategoriaChange} disabled />
                    </div>
                    <div >
                        <label className="block font-medium text-gray-700">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre.toLocaleLowerCase()} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} required />
                    </div>
                    <div >
                        <label className="block font-medium text-gray-700">Ingredientes (separar con coma)</label>
                        <input type="text" name="ingredientes" value={formData.ingredientes} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} />
                    </div>
                    <div >
                        <label className="block font-medium text-gray-700">Imagen (opcional)</label>
                        <div>
                            <input
                                type="file"
                                name="imagen"
                                accept=".jpeg,.jpg,.png,.webp"
                                capture="environment"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div>
                            {image && (
                                <div className="mt-4 relative h-[150x] w-[150px]">
                                    <img src={image} alt="Imagen subida" className="w-full h-auto" />
                                    <button className="bg-bgPrice rounded-md px-2 py-1  absolute top-0 right-0" onClick={() => setImage("")}>❌</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div >
                        <label className="block font-medium text-gray-700">Precio $</label>
                        <input type="number" name="precio" value={formData.precio} step='1' min='1' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} required={formData.precio === 0} />
                    </div>

                    <div className="grid grid-cols-2">
                        <div >
                            <div className="flex items-center">
                                <input type="checkbox" name="esPopular" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" onChange={handleChange} checked={formData.esPopular} />
                                <label className="ml-2 block font-medium text-gray-700">Recomendado</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex items-center">
                                <input type="checkbox" name="esPromo" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" onChange={handleChange} checked={formData.esPromo} />
                                <label className="ml-2 block font-medium text-gray-700">Promocional</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex items-center">
                                <input type="checkbox" name="esVegetariano" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" onChange={handleChange} checked={formData.esVegetariano} />
                                <label className="ml-2 block font-medium text-gray-700">Vegetariano</label>
                            </div>
                        </div>
                        <div >
                            <div className="flex items-center">
                                <input type="checkbox" name="esSinTac" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" onChange={handleChange} checked={formData.esSinTac} />
                                <label className="ml-2 block font-medium text-gray-700" >Sin TAC</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="py-2 px-4 bg-bgPrice block text-white rounded-lg mt-5 uppercase">Actualizar</button>
                </form>
            </div>
        </div>
    )
}
