import { Menu } from "@/interfaces";



export const Carta: Menu[] = [

    // PICADAS
    {
        name: 'Picadas',
        precio: 0,
        categoria: 'entradas',
        ingredientes: 'Jamon Cocido, Jamon Crudo, Ternera Adobada, Salame Español, Queso Tafi, Queso Tybo, Queso Roquefort, Papas Rusticas, Olivas Verdes y Negras, Con Aderezos de la Casa...',
        porcionSize: 'Chica' || 'Grande',
        variante: ['Fria', 'Caliente']
    },
    {
        name: 'Rabas Americano',
        precio: 0,
        categoria: 'entradas',
        ingredientes: 'Con tres salsas',
    },
    {
        name: 'Empanadas',
        precio: 0,
        categoria: 'entradas',
        variante: ['Carne', 'Pollo', 'Capresse']
    },
    {
        name: 'Papas',
        precio: 0,
        categoria: 'entradas',
        variante: [
            'Papas Bravas',
            'Porcion de Papas Fritas',
            'Papas Gratinadas',
            'Papa Americanas (cheddar, bacon, verdeo)'
        ]
    },
    // PLATO PRINCIPAL
    {
        name: 'Vacio al Malbec',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Vacio al Malbec, Polenta Batica con Crema y Queso Criollo y Tomates Confitados.'
    },
    {
        name: 'Osobuco Braseado',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Osobuco braseado en vino tinto acompañado de arroz cremoso.'
    },
    {
        name: 'Picana al ajillo',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Picana en salsa de ajo acompañada de papas noisette.'
    },
    {
        name: 'Picana Grille',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Picana grillada con chimichurri acompañada de papas españolas.'
    },
    {
        name: 'Lomo Conquistador',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Lomo en salsa de hongos de pino y champiñones acompañada de papas al horno a las finas hierbas.'
    },
    {
        name: 'Lomo a la pimienta',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Lomo en salsa Malbec con pimienta acompañado de papas a la crema y estragon.'
    },
    {
        name: 'Lomo Grille',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Lomo grillado de salsa criolla acompañada de papas españolas.'
    },
    {
        name: 'Bondiola Braseada',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Bondiola braseada en cerveza negra con pure de batatas, nueves y pimientos laqueados.'
    },
    {
        name: 'Ribs de Cerdo',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Costilla de cerdo en salsa barbacoa acompañado de batatas fritas.'
    },
    {
        name: 'Pollo al champiñon',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Bife de pollo en salsa de champiñones acompañado de papas españolas.'
    },
    {
        name: 'Pollo al grille',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Bife de pollo grillado con salsa criolla acompañado de papas españolas.'
    },
    {
        name: 'Salmon a la chapa',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Salmon con crema de espinacas acompañado de papas en gajos.'
    },
    {
        name: 'Salmon grille',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Salmon grillado con salsa criolla acompañado de papas españolas'
    },
    {
        name: 'Trucha a la piedra',
        precio: 0,
        categoria: 'plato principal',
        ingredientes: 'Trucha en manteca ahumada acompañada de vegetales asados'
    },
    // POSTRES  
    {
        name: 'Tiramisu',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Chocolina',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Flan',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Budin de pan',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Ensalada de frutas',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Postre Helado Almendrado',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Postre Helado Escoces',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Postre Helado Suizo',
        precio: 0,
        categoria: 'postres',
    },
    {
        name: 'Dulce Regional (consultar disponibilidad)',
        precio: 0,
        categoria: 'postres',
        ingredientes: 'Zapallo en almibar, higo en almibar, batata en almibar, lima en almibar, cayote',
    },
    // PASTAS
    {
        name: 'Spaghetti di mare',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Spaghetti con tinta de calamar y salsa crema de camarones.'
    },
    {
        name: 'Lasagna vegetariana',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Laminas de pasta rellenas espinaca ricote y queso con salsa mixta.'
    },
    {
        name: 'Lasagna bolognesa',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Laminas de pasta rellenas con salsa con salsa bolognesa, jamon y queso con salsa bechamel.'
    },
    {
        name: 'Canelones de humita',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Creppes rellenos de humita tucumana con salsa mixta.'
    },
    {
        name: 'Panzotti de batata ahumada',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Pasta rellena de batatas ahumadas, mascarpone y almendras con manteca a las finas hierbas.'
    },
    {
        name: 'Sorrentinos clasicos',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Pasta rellena de jamon y queso con salsa mixta.'
    },
    {
        name: 'Sorrentinos Verdi',
        precio: 0,
        categoria: 'pastas',
        ingredientes: 'Pasta rellena de espinaca y champiñones con salsa aurora a base de crema, tomate, ajo y albahaca.'
    },
    // MINUTAS
    {
        name: 'Matambre al verdeo',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Matambre a la pizza',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Matambre al roquefort',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Milanesa comun',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Milanesa napolitana',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Milanesa a caballo',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Suprema comun',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Suprema napolitana',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Revuelvo al gramajo, Clasico argentino',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    {
        name: 'Tortilla de papa',
        precio: { paraUno: 0, paraDos: 1 },
        categoria: 'minutas'
    },
    // ENTREPANES
    {
        name: 'Serranito Mixto',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Jamon crudo, queso tafi con manteca en pan cibatta artesanal.'
    },
    {
        name: 'Serranito Especial',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Jamon crudo, queso tafi, rucula y tomates confit con aderezo de olivas en pan cibatta artesanal.'
    },
    {
        name: 'Pulled Beef o Carrero',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Carne de res braseada al malbec, queso tybo gratinado y cebolla caramelizada, en pan de papa casero.'
    },
    {
        name: 'Pulled Pork o Bondiolito',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Bondiola de cerdo braseada a la barbacoa, queso tybo gratinado y cebolla caramelizada, en pan de papa casero.'
    },
    {
        name: 'Pulled Chicken o Pollo del Colalao',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Pollo braseado al verdeo, queso tybo y tomates en pan arabe casero.'
    },
    {
        name: 'Hamburguesa clasica',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Hamburguesa casera de 200grs, lechuga, tomate, en pan casero.'
    },
    {
        name: 'Gramburguesa',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Hamburguesa casera de 200grs, queso tybo, panceta, lechuga, tomate y cebolla caramelizada con mayonesa de chimi en pan casero.'
    },
    {
        name: 'Mexican Lomo',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Lomo de res, queso, jamon cocido, tomate, huevo a la plancha, mayonesa de chimi en pan ciabatta casero.'
    },
    {
        name: 'De la huerta al horno',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Verduras asadas, aderezo citrico, queso tybo gratinado en pan ciabatta casero.'
    },
    {
        name: 'Radical',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Clasico sanguche de lomito, lechuga, tomate en pan sanguchero acompañado de aji en vaina.'
    },
    {
        name: 'Sanguche de Milanesa',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Clasico sanguche de milanesa, lechuga, tomate en pan sanguchero.'
    },
    {
        name: 'Mexicano',
        precio: 0,
        categoria: 'entrepanes',
        ingredientes: 'Clasico sanguche mixto tostado, lomito, tomate, queso gratinado y huevo a la plancha.'
    },
    // ENSALADAS
    {
        name: 'De Quesos y Verdes',
        precio: 0,
        categoria: 'ensaladas',
        ingredientes: 'Verdes de estacion, quesos de tafi y de cabra, tomates confit, hongos y vinagreta de mostaza con tostadas en pan casero.'
    },
    {
        name: 'Del Cerro',
        precio: 0,
        categoria: 'ensaladas',
        ingredientes: 'Mix de hojas, jamon crudo, queso criollo, tomates confit y croutones.'
    },
    {
        name: 'Del Reloj',
        precio: 0,
        categoria: 'ensaladas',
        ingredientes: 'Jamon crudo, queso tybo, lechugas, manzana verde, anana, nueces y aderezo de queso blanco.'
    },
    {
        name: 'Ensalada Cesar',
        precio: 0,
        categoria: 'ensaladas',
        ingredientes: 'Mix de hojas, pollo, parmesano, aceituna negra, croutones, aderezo cesar.'
    },
]
