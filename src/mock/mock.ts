import { ICategoria } from "@/interfaces";

function getrandomNumber() {
    return Math.floor(Math.random() * (150 - 100 + 1) + 100);
}

export const mock: ICategoria[] = [
    {
        categoria: '🥟 entradas',
        menus: [
            {
                nombre: 'rabas americano',
                precio: getrandomNumber(),
                ingredientes: ['Con tres salsas'],
            },
            {
                nombre: 'empanadas',
                precio: getrandomNumber(),
                ingredientes: ['Carne', 'Pollo', 'Capresse']
            },
            {
                nombre: 'Picadas',
                precio: getrandomNumber(),
                ingredientes: ['Jamon Cocido', 'Jamon Crudo', 'Ternera Adobada', 'Salame Español', 'Queso Tafi', 'Queso Tybo', 'Queso Roquefort', 'Papas Rusticas', 'Olivas Verdes', 'Olivas Negras', 'Aderezos de la Casa'],
            },
        ]
    },
    {
        categoria: '🍜 plato principal',
        menus: [
            {
                nombre: 'pescado a la parrilla',
                ingredientes: ['pescado', 'limón', 'aceite de oliva', 'sal', 'pimienta'],
                precio: getrandomNumber()
            },
            {
                nombre: 'lomo saltado',
                ingredientes: ['lomo de res', 'cebolla', 'tomate', 'pimiento', 'arroz', 'frijoles'],
                precio: getrandomNumber()
            },
            {
                nombre: 'picana grille',
                precio: getrandomNumber(),
                ingredientes: ['picana grillada', 'chimichurri', 'papas españolas']
            },
            {
                nombre: 'lomo conquistador',
                precio: getrandomNumber(),
                ingredientes: ['Lomo en salsa de hongos de pino', 'champiñones', 'papas al horno a las finas hierbas']
            },
            {
                nombre: 'lomo a la pimienta',
                precio: getrandomNumber(),
                ingredientes: ['Lomo en salsa malbec con pimienta', 'papas a la crema', 'estragon']
            },
            {
                nombre: 'lomo grille',
                precio: getrandomNumber(),
                ingredientes: ['Lomo grillado de salsa criolla', 'papas españolas']
            },
            {
                nombre: 'bondiola braseada',
                precio: getrandomNumber(),
                ingredientes: ['bondiola braseada en cerveza negra', 'pure de batatas', 'nueces', 'pimientos laqueados']
            },
        ]
    },
    {
        categoria: '🍮 postres',
        menus: [
            {
                nombre: 'brownie',
                ingredientes: ['harina', 'azúcar', 'huevos', 'chocolate', 'mantequilla'],
                precio: getrandomNumber()
            },
            {
                nombre: 'helado de vainilla',
                ingredientes: ['leche', 'crema', 'azúcar', 'vainilla'],
                precio: getrandomNumber() 
            },
        ]
    },
    {
        categoria: '🍝 pastas',
        menus: [
            {
                nombre: 'spaghetti di mare',
                precio: getrandomNumber(),
                ingredientes: ['spaghetti con tinta de calamar', 'salsa crema de camarones']
            },
            {
                nombre: 'lasagna vegetariana',
                precio: getrandomNumber(),
                ingredientes: ['Laminas de pasta rellenas espinaca ricote', 'queso con salsa mixta']
            },
            {
                nombre: 'lasagna bolognesa',
                precio: getrandomNumber(),
                ingredientes: ['Laminas de pasta rellenas con salsa con salsa bolognesa, jamon', 'queso con salsa bechamel']
            },
            {
                nombre: 'canelones de humita',
                precio: getrandomNumber(),
                ingredientes: ['creppes rellenos de humita tucumana', 'salsa mixta']
            },
            {
                nombre: 'panzotti de batata ahumada',
                precio: getrandomNumber(),
                ingredientes: ['pasta rellena de batatas ahumadas', 'mascarpone', 'almendras con manteca a las finas hierbas']
            },
            {
                nombre: 'sorrentinos clasicos',
                precio: getrandomNumber(),
                ingredientes: ['pasta rellena de jamon y queso', 'salsa mixta']
            },
            {
                nombre: 'sorrentinos verdi',
                precio: getrandomNumber(),
                ingredientes: ['pasta rellena de espinaca y champiñones', 'salsa aurora a base de crema', 'tomate', 'ajo', 'albahaca']
            },
        ],
    },
    {
        categoria: '🥪 entrepanes',
        menus: [
            {
                nombre: 'serranito mixto',
                precio: getrandomNumber(),

                ingredientes: ['jamon crudo', 'queso tafi con manteca', 'en pan cibatta artesanal']
            },
            {
                nombre: 'serranito especial',
                precio: getrandomNumber(),

                ingredientes: ['jamon crudo', 'queso tafi', 'rucula', 'tomates confit', 'aderezo de olivas', 'en pan cibatta artesanal']
            },
            {
                nombre: 'pulled beef o carrero',
                precio: getrandomNumber(),

                ingredientes: ['carne de res braseada al malbec', 'queso tybo gratinado', 'cebolla caramelizada', 'en pan de papa casero']
            },
            {
                nombre: 'pulled pork o bondiolito',
                precio: getrandomNumber(),

                ingredientes: ['bondiola de cerdo braseada a la barbacoa', 'queso tybo gratinado', 'cebolla caramelizada', 'en pan de papa casero']
            },
            {
                nombre: 'pulled chicken o pollo del colalao',
                precio: getrandomNumber(),

                ingredientes: ['pollo braseado al verdeo', 'queso tybo', 'tomates', 'en pan arabe casero']
            },
        ],
    },
    {
        categoria: '🥗 ensaladas',
        menus: [
            {
                nombre: 'de quesos y verdes',
                precio: getrandomNumber(),

                ingredientes: ['verdes de estacion', 'quesos de tafi', 'queso de cabra', 'tomates confit', 'hongos', 'vinagreta de mostaza', 'tostadas', 'en pan casero']
            },
            {
                nombre: 'del cerro',
                precio: getrandomNumber(),

                ingredientes: ['mix de hojas', 'jamon crudo', 'queso criollo', 'tomates confit', 'croutones']
            },
            {
                nombre: 'del reloj',
                precio: getrandomNumber(),

                ingredientes: ['jamon crudo', 'queso tybo', 'lechugas', 'manzana verde', 'anana', 'nueces', 'aderezo de queso blanco']
            },
            {
                nombre: 'ensalada cesar',
                precio: getrandomNumber(),

                ingredientes: ['mix de hojas', 'pollo', 'parmesano', 'aceituna negra', 'croutones', 'aderezo cesar']
            },
        ]
    },
];