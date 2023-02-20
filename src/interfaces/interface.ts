

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
    descripcion?: string
    imagen?: string
    precio: number
}

