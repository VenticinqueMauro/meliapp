import { Categoria } from "@/interfaces";
import { Input, Link, Navbar, Text } from "@nextui-org/react";
import { FcSearch } from 'react-icons/fc'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'



const Categorias: Categoria[] = [
    {
        name: '🥟 entradas'
    },
    {
        name: '🍽️ plato principal'
    },
    {
        name: '🍮 postres'
    },
    {
        name: '🍝 pastas'
    },
    {
        name: '🥪 entrepanes'
    },
    {
        name: '🧆 minutas'
    },
    {
        name: '🥗 ensaladas'
    },
    {
        name: '🍕 pizzas'
    },
    {
        name: '🥃 bebidas'
    },
    {
        name: '☕ cafeteria'
    },
]


export default function NavbarMenu() {


    return (
        <div className="sticky top-0 ">
            <Navbar  style={{ width: '100%'}}>
                <Navbar.Brand >
                    <Navbar.Toggle aria-label="toggle navigation" />
                    <Text size={16} b color="inherit" css={{ padding: '15px', marginTop: '10px' }} h1>
                        AMERICANO
                        <Text size={14} css={{ textAlign: 'center', marginTop: '-8px' }}>Restobar</Text>
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link href="#">
                        Customers
                    </Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content >
                    <Navbar.Item css={{ width: '150px' }}>
                        <Input
                            clearable
                            underlined
                            color="primary"
                            aria-label="Buscar"
                            placeholder="Buscar"
                            contentRight={<FcSearch />}
                        />
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse >
                    {Categorias.map((item, index) => (
                        <Navbar.CollapseItem key={index} >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                    textTransform: 'capitalize',
                                }}
                                href={`#${item.name.slice(3)}`}
                            // onPress={() => setIsPressed(true)}
                            >
                                {item.name}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
            <div className="relative overflow-hidden mx-auto  bg-white shadow shadow-xs">
                <div className="flex overflow-x-auto gap-1 xl:justify-center items-center" style={{ whiteSpace: 'nowrap' }}>
                    {
                        Categorias.map((menu, i) => (
                            // <a key={i} href={`#${menu.name.slice(3)}`}  className="mx-1 capitalize w-auto p-1  mt border  text-center rounded-lg mt-2 mb-2 shadow shadow-sm bg-black text-white font-semibold">
                            //     {menu.name} 
                            // </a>
                            <a key={i} href={`#${menu.name.slice(3)}`} className="mx-1 capitalize w-auto p-1  mt border  text-center rounded-lg mt-2 mb-5 shadow shadow-sm bg-black text-white font-semibold lg:hover:bg-gray-700 lg:focus:bg-gray-700 lg:active:bg-gray-800 transition-all duration-300 ease-in-out transform active:scale-95">
                                {menu.name}
                            </a>
                        ))
                    }
                </div>
                <div className="flex items-center justify-between text-lg absolute bottom-0 w-full">
                    <BsArrowLeftShort />
                    <p className="text-xs">Deslizar</p>
                    <BsArrowRightShort />
                </div>
            </div>
        </div>
    )
}
