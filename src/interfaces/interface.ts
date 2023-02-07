

export interface User {
    user: string
    password: string
}


export interface Menu {
    name: string,
    precio: number | {paraUno: number, paraDos: number},
    categoria: string,
    ingredientes?: string,
    porcionSize?: string
    variante?: string[]
}

export interface Categoria {
    name: string
}