

export interface User {
    email: string
    password: string
}

export interface ICartaState {
    data: ICategoria[];
    loading: boolean;
    resultadosBusqueda: ICategoria[];
    precioHasta: ICategoria[];
    populares: ICategoria[];
    promociones: ICategoria[];
    vegetarianos: ICategoria[];
    sinTacc: ICategoria[];
    filtroActual: string
    adminLogged: boolean
}

export interface ICategoria {
    categoria: string
    menus: IMenu[]
}

export interface IMenu {
    nombre: string
    ingredientes: string[]
    precio: number 
    imagen?: string 
    esPopular?: boolean
    esPromo?: boolean
    esVegetariano?: boolean
    esSinTac?: boolean
}

