

export interface User {
    user: string
    password: string
}


export interface ICategoria {
    categoria: string
    menus: IMenu[]
}

export interface IMenu {
    nombre: string
    ingredientes: string[]
    precio: number
    descripcion?: string
    imagen?: string
    esPopular?: boolean
    esOferta?: boolean
}

