import logoAdmin from '@/assets/admin.png'
import { User } from "@/interfaces"
import { useState } from "react"
import { FaUserCog } from 'react-icons/fa'
import { MdKeyboardBackspace } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { Admin } from "./admin/Admin"



export const Login = () => {

    const [user, setUser] = useState<User>({
        user: '',
        password: ''
    })


    const [authorized, setAuthorized] = useState(true)
    const [errorMsj, setErrorMsj] = useState('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (user.user === 'admin@admin' && user.password === '1234') {
            setErrorMsj('AUTORIZADO')
            setTimeout(() => {
                setAuthorized(true)
            }, 500)
        } else {
            setErrorMsj('ACCESO DENEGADO')
        }
    }

    return (
        <>
            <Link to='/' ><MdKeyboardBackspace className="ml-6 my-3 text-4xl" /></Link>
            <h1 className='px-6 text-2xl'>Modo Admin</h1>
            {
                authorized
                    ?
                    <Admin />
                    :
                    <div className='w-4/5 lg:w-1/3 mx-auto mt-20 shadow-md rounded-md p-2'>
                        <img className="w-20 mx-auto m-2" src={logoAdmin} alt="admin" />
                        <form className="flex flex-col gap-2" typeof='submit' onSubmit={handleSubmit}>
                            <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                                <FaUserCog className="text-gray-500" />
                                <input className=" w-full placeholder:text-gray-500 outline-none" placeholder="User" name="user" type={'text'} onChange={handleChange} />
                            </div>
                            <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                                <RiLockPasswordFill className='text-gray-500' />
                                <input className=" w-full placeholder:text-gray-500 outline-none" placeholder="Password" name="password" type={'password'} onChange={handleChange} />
                            </div>
                            <button className="p-1 bg-black text-white shadow rounded-md uppercase font-medium outline-none">LogIn</button>
                        </form>
                        <span className='bg-red-400 block text-center mt-2 text-xl text-white shadow-sm'>
                            {errorMsj}
                        </span>
                    </div>
            }
        </>
    )
}
