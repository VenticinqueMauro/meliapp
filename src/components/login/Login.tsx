import { useAppDispatch, useAppSelector } from '@/app/hooks'
import logoAdmin from '@/assets/admin.png'
import { loginAdmin, selectCarta } from '@/features/menuDigital/cartaSlice'
import { User } from "@/interfaces"
import { auth } from '@/main'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from 'react-hot-toast'
import { FaUserCog } from 'react-icons/fa'
import { MdKeyboardBackspace } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom"


export const Login = () => {

    const { adminLogged } = useAppSelector(selectCarta)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [userCredentials, setUserCredentials] = useState<User>({
        email: '',
        password: ''
    })



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await toast.promise(signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password),
                {
                    loading: 'ingresando...',
                    success: 'Login realizado con éxito!',
                    error: 'No se pudo ingresar a la cuenta.',

                }, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }
            }
            )

            // Si el inicio de sesión es exitoso, establece authorized en true
            dispatch(loginAdmin());
            // toast.success('Login Exitoso!', {
            //     style: {
            //         borderRadius: '10px',
            //         background: '#333',
            //         color: '#fff',
            //     },
            // })
            navigate('/')

        } catch (error) {
            // Si hay un error, establece el mensaje de error
            toast('Acceso Denegado!', {
                icon: '⚠️',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        }
    };

    return (
        <div className='containerAll h-screen card relative'>
            <Link to="/" className="flex items-center gap-1">
                <MdKeyboardBackspace className="ml-6  text-4xl" />
            </Link>
            <div className="fixed top-1/3 -translate-y-3/4 left-1/2 -translate-x-1/2 w-80 card">
                <div className='text-center tracking-wide pb-10'>
                    <h2 className='text-3xl'>⚠️ Acceso restringido</h2>
                    <h4 className='text-gray-700'>solo para administradores del restaurante</h4>
                </div>
                <form
                    className="flex flex-col gap-2"
                    typeof="submit"
                    onSubmit={handleSignIn}
                >
                    <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                        <FaUserCog className="text-gray-500" />
                        <input
                            className=" w-full placeholder:text-gray-500 outline-none"
                            placeholder="Email"
                            name="email"
                            type={"email"}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                        <RiLockPasswordFill className="text-gray-500" />
                        <input
                            className=" w-full placeholder:text-gray-500 outline-none"
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="p-1 bg-bgPrice text-white shadow rounded-md uppercase font-medium outline-none">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );

}
