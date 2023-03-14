import logoAdmin from '@/assets/admin.png'
import { User } from "@/interfaces"
import { useEffect, useState } from "react"
import { FaUserCog } from 'react-icons/fa'
import { MdKeyboardBackspace } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Admin } from './admin/Admin'
import { auth } from '@/main'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { loginAdmin, selectCarta } from '@/features/menuDigital/cartaSlice'
import { toast } from 'react-hot-toast'


export const Login = () => {

    const { adminLogged } = useAppSelector(selectCarta)
    const dispatch = useAppDispatch()

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
            await signInWithEmailAndPassword(
                auth,
                userCredentials.email,
                userCredentials.password
            );

            // Si el inicio de sesión es exitoso, establece authorized en true
            dispatch(loginAdmin());
            toast.success('Login Exitoso!', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })

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
            <Link to="/">
                <MdKeyboardBackspace className="ml-6  text-4xl" />
            </Link>
            <h1 className="px-6 text-2xl">Modo Admin</h1>
            {adminLogged ? (
                <Admin />
            ) : (
                <div className="w-4/5 lg:w-1/3 mx-auto mt-20 shadow-md shadow-black rounded-md p-2 bg-bgPrice/10 card">
                    <img
                        className="w-20 mx-auto m-2"
                        src={logoAdmin}
                        alt="admin"
                    />
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
                        <button className="p-1 bg-black text-white shadow rounded-md uppercase font-medium outline-none">
                            Entrar
                        </button>
                    </form>
                </div>
            )}
        </div>
    );

}
