import { ICategoria, IMenu } from "@/interfaces";
import { db } from "@/main";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

interface EditarPlatosProps {
    categoria: string;
    menu: IMenu;
}

export const EditarPlatos = ({ categoria, menu }: EditarPlatosProps): JSX.Element => {

    const [nombreCategoria, setNombreCategoria] = useState(categoria);
    const [formData, setFormData] = useState<IMenu>({
        nombre: menu.nombre,
        descripcion: menu.descripcion || "",
        precio: menu.precio || 0,
        ingredientes: menu.ingredientes || [],
        esPopular: menu.esPopular || false,
        esPromo: menu.esPromo || false,
        esVegetariano: menu.esVegetariano || false,
        esSinTac: menu.esSinTac || false,
        imagen: menu.imagen || "",
    });

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value, type, checked } = event.target;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: type === "checkbox" ? checked : value,
    //     }));
    // };

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

            console.log("Documento actualizado con éxito");
        } catch (error) {
            console.error("Error al actualizar el documento:", error);
        }
    };


    return (
        <div className="mx-auto max-w-xl px-8">
            <form className="flex flex-col gap-4 pt-10" onSubmit={handleFormSubmit}>
                <div className="c">
                    <label className="block font-medium text-gray-700">Categoria</label>
                    <input type="text" value={categoria.toLocaleLowerCase()} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleNombreCategoriaChange} disabled/>
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
                    <label className="block font-medium text-gray-700">Descripción (opcional)</label>
                    <input type="text" name="descripcion" value={formData.descripcion} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} />
                </div>
                <div >
                    <label className="block font-medium text-gray-700">Precio $</label>
                    <input type="number" name="precio" value={formData.precio} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleChange} required />
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
                    <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-lg">Actualizar</button>
                </div>
            </form>
        </div>
    )
}
