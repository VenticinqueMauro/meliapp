import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchMenuData, selectCarta } from "@/features/menuDigital/cartaSlice";
import { useEffect } from "react";
import { MapeoCards } from "./MapeoCards";

export const ItemList = () => {

    const { data, loading, resultadosBusqueda, populares, promociones,vegetarianos, sinTacc, precioHasta, filtroActual } = useAppSelector(selectCarta)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMenuData());
    }, [dispatch]);
    

    return (
        <div className="containerAll">
            <div className='min-h-screen lg:px-12 pt-1'>
                {
                    loading
                        ?
                        <p>Cargando...</p>
                        :
                        <>
                        {filtroActual === 'busqueda' && <MapeoCards data={resultadosBusqueda} />}
                        {filtroActual === 'popular' && <MapeoCards data={populares} />}
                        {filtroActual === 'promos' && <MapeoCards data={promociones} />}
                        {filtroActual === 'vegetariano' && <MapeoCards data={vegetarianos} />}
                        {filtroActual === 'sinTacc' && <MapeoCards data={sinTacc} />}
                        {filtroActual === 'hasta' && <MapeoCards data={precioHasta} />}
                        {filtroActual === 'ninguno' && <MapeoCards data={data} /> }
                        </>
                }
            </div>
        </div>
    )
}


