import { useState } from "react";
import { AgregarPlatos } from "./AgregarPlatos";
import { ListadoPlatos } from "./ListadoPlatos";

export const Admin = () => {

    const [agregarPlatos, setAgregarPlatos] = useState(false);
    const [listarPlatos, setListarPlatos] = useState(false);



    return (
        <>
            <button className="bg-blue-700 text-white p-1 rounded block mt-2 mx-3" onClick={() => setAgregarPlatos(!agregarPlatos)}>Agregar Plato</button>
            <button className="bg-blue-700 text-white p-1 rounded block mt-2 mx-3" onClick={() => setListarPlatos(!listarPlatos)}>Listado de Platos</button>
            {
                agregarPlatos && <AgregarPlatos />
            }
            {
                listarPlatos && <ListadoPlatos />
            }



        </>
    );
};

