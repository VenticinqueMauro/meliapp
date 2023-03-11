

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
    imagen?: string 
    esPopular?: boolean
    esPromo?: boolean
    esVegetariano?: boolean
    esSinTac?: boolean
}

