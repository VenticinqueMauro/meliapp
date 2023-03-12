import { IMenu } from "@/interfaces";
import { db } from "@/main";
import Resizer from 'react-image-file-resizer';
import imageFileResizer from 'react-image-file-resizer';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ChangeEvent, MouseEvent, useState } from "react";


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


    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const acceptedFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']; // Lista de formatos aceptados

        if (!acceptedFormats.includes(file.type)) {
            alert('Formato de imagen no válido. Por favor, seleccione una imagen JPEG, JPG, PNG o WebP.');
            return;
        }

        imageFileResizer.imageFileResizer(
            file,
            300, // Width
            300, // Height
            file.type.includes('png') ? 'PNG' : (file.type.includes('jpeg') || file.type.includes('webp') || file.type.includes('jpg')) ? 'JPEG' : '', // Format (detectar si el archivo es PNG, JPEG, JPG o WebP)
            100, // Quality
            0, // Rotation
            (uri) => {
                setImage(uri as string);
                updateFormData('imagen', uri); // Actualizar el estado de formData con la imagen
            },
            'base64', // Output type
            200 // Max file size
        );
    };



    const updateFormData = (name: string, value: any) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
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
            await setDoc(docRef, newMenuData);
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
        <div className="mx-auto max-w-xl px-8">
            <h2 className="text-center text-2xl underline">Agregar Platos al Menu</h2>
            <form className="flex flex-col gap-4 pt-10" >
                <div className="c">
                    <label className="block font-medium text-gray-700">Categoria</label>
                    <input type="text" value={nombreCategoria.toLocaleLowerCase()} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleNombreCategoriaChange} />
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
                    <input type="number" name="precio" value={formData.precio} step='1' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} required />
                </div>
                <div >
                    <label className="block font-medium text-gray-700">Imagen (opcional)</label>
                    <input
                        type="file"
                        name="imagen"
                        accept=".jpeg,.jpg,.png,.webp"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={handleImageUpload}
                    />
                    <div>
                        {image && (
                            <div className="mt-4 relative h-[150x] w-[150px]">
                                <img src={image} alt="Imagen subida" className="w-full h-auto" />
                                <button className="bg-black text-white px-2 py-1  absolute top-0 right-0" onClick={() => setImage("")}>X</button>
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
                    <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-lg" onClick={handleSubmit}>Agregar Menu</button>
                </div>
            </form>
        </div>
    )
}
