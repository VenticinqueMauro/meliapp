import { IMenu } from "@/interfaces";
import { db, storage } from "@/main";
import { MAX_IMAGE_SIZE } from "@/utils/utils";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, MouseEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";


export const AgregarPlatos = () => {

    const [image, setImage] = useState<string>('');
    const [nombreCategoria, setNombreCategoria] = useState("");
    const [formData, setFormData] = useState<IMenu>({
        nombre: "",
        precio: 0,
        ingredientes: [],
        esPopular: false,
        esPromo: false,
        esVegetariano: false,
        esSinTac: false,
        imagen: "",
    });

    const handleNombreCategoriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombreCategoria(e.target.value.toLocaleLowerCase());
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement> | MouseEvent<EventTarget>) => {
        const { name, value, checked, type } = e.target as HTMLInputElement;

        if (name === 'ingredientes') {
            const ingredientesArray = value.toLowerCase().split(',');
            setFormData({
                ...formData,
                [name]: ingredientesArray,
                imagen: image,
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value.toLocaleLowerCase(),
            });
        }
    };

    const uploadImageToFirebase = async (file: File) => {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
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

        // Call function to upload image to Firebase
        uploadImageToFirebase(file);
    };



    const updateFormData = (name: string, value: any) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const docRef = doc(db, "Menus", "Prueba");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // El documento ya existe, obtenemos su valor y actualizamos la memoria
            const existingData = docSnap.data();
            const existingCategoryIndex = existingData.menus.findIndex((menu: { categoria: string; }) => menu.categoria.toLocaleLowerCase() === nombreCategoria.toLocaleLowerCase());
            if (existingCategoryIndex === -1) {
                existingData.menus.push({
                    categoria: nombreCategoria,
                    menus: [formData]
                });
            } else {
                existingData.menus[existingCategoryIndex].menus.push(formData);
            }
            // Actualizamos el documento en Firestore
            await updateDoc(docRef, { menus: existingData.menus });
            await toast.promise(updateDoc(docRef, { menus: existingData.menus }), {
                loading: 'Agregando menú...',
                success: '¡Menú agregado con éxito!',
                error: 'No se pudo agregar el Menú.'
            }, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        } else {
            // El documento no existe, lo creamos con el nuevo valor
            const newMenuData = {
                menus: [
                    {
                        categoria: nombreCategoria,
                        menus: [formData]
                    }
                ]
            };
            await toast.promise(setDoc(docRef, newMenuData), {
                loading: 'Agregando menú...',
                success: '¡Menú agregado con éxito!',
                error: 'No se pudo agregar el Menú.'
            }, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        }

        // Limpiamos el formulario y actualizamos el estado
        setFormData({
            nombre: "",
            precio: 0,
            ingredientes: [],
            esPopular: false,
            esPromo: false,
            esVegetariano: false,
            esSinTac: false,
            imagen: "",
        });
        setImage('');
        setNombreCategoria(nombreCategoria);

    };



    return (
        <div className='containerAll h-screen card relative'>
            <Link to="/" className="flex items-center gap-1">
                <MdKeyboardBackspace className="ml-6  text-4xl" />
                <p className="text-lg">Volver al <b>inicio</b></p>
            </Link>
            <div className="fixed top-1/2 -translate-y-2/3 w-80 left-1/2 -translate-x-1/2">
                <h2 className="text-center text-2xl underline">Agregar Platos al Menu</h2>
                <form className="flex flex-col gap-4 pt-10" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-medium text-gray-700">Categoria</label>
                        <input type="text" value={nombreCategoria.toLocaleLowerCase()} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleNombreCategoriaChange} required />
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
                        <label className="block font-medium text-gray-700">Precio $</label>
                        <input type="number" name="precio" value={formData.precio} step='1' min='1' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} required={formData.precio === 0} />
                    </div>
                    <div >
                        <label className="block font-medium text-gray-700">Imagen (opcional)</label>
                        <input
                            type="file"
                            name="imagen"
                            accept=".jpeg,.jpg,.png,.webp"
                            capture="environment"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={handleImageUpload}
                        />

                        <div>
                            {image && (
                                <div className="mt-4 relative h-[150x] w-[150px]">
                                    <img src={image} alt="Imagen subida" className="w-full h-auto" />
                                    <button className="bg-bgPrice rounded-md px-2 py-1  absolute top-0 right-0" onClick={() => setImage("")}>❌</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div >
                            <div className="flex items-center">
                                <input type="checkbox" name="esPopular" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" onChange={handleChange} checked={formData.esPopular} />
                                <label className="ml-2 block font-medium text-gray-700">Popular</label>
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
                    <div >
                        <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-lg" >Agregar Menu</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
