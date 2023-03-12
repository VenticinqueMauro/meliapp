import { useAppDispatch } from "@/app/hooks";
import { logOutAdmin } from "@/features/menuDigital/cartaSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgregarPlatos } from "./AgregarPlatos";
import { CambiarPassword } from "./CambiarPassword";
import { ListadoPlatos } from "./ListadoPlatos";

export const Admin = () => {

    const [agregarPlatos, setAgregarPlatos] = useState(false);
    const [listarPlatos, setListarPlatos] = useState(false);
    const [cambiarPassword , setCambiarPassword] = useState(false);

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logOutAdmin())
        navigate('/login')
    }

    return (
        <div >
            <button className="bg-blue-700 text-white p-1 rounded block mt-2 mx-3" onClick={() => setAgregarPlatos(!agregarPlatos)}>Agregar Plato</button>
            <button className="bg-blue-700 text-white p-1 rounded block mt-2 mx-3" onClick={() => setListarPlatos(!listarPlatos)}>Listado de Platos</button>
            <button className="bg-blue-700 text-white p-1 rounded block mt-2 mx-3" onClick={() => setCambiarPassword(!cambiarPassword)}>Cambiar Contraseña</button>
            <button className="bg-blue-700 text-white p-1 rounded block mt-2 mx-3" onClick={handleLogOut}>Log Out</button>
            {
                agregarPlatos && <AgregarPlatos />
            }
            {
                listarPlatos && <ListadoPlatos />
            }
            {
                cambiarPassword && <CambiarPassword />
            }
        </div>
    );
};

