import { useAppDispatch } from "@/app/hooks"
import { logOutAdmin } from "@/features/menuDigital/cartaSlice"
import { auth } from "@/main"
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth"
import { ChangeEvent, useState } from "react"
import { toast } from "react-hot-toast"
import { FaUserCog } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

export const CambiarPassword = () => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const user = auth.currentUser

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (user) {
                // Verificar la contraseña anterior del usuario
                const { email, oldPassword, newPassword, confirmNewPassword } = userCredentials
                const credential = EmailAuthProvider.credential(email, oldPassword)
                await reauthenticateWithCredential(user, credential)

                if (newPassword === confirmNewPassword) {
                    await toast.promise(updatePassword(user, newPassword), {
                        loading: 'Cambiando contraseña...',
                        success: 'Cambio de contraseña exitoso!',
                        error: 'No se pudo cambiar la contraseña.',
                        
                    }, {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });
                    dispatch(logOutAdmin())
                    navigate('/login')
                } else {
                    toast.error('Las contraseñas no coinciden',{
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
                }
            }
        } catch (error) {
            console.log(error)
            toast.error('La contraseña anterior es incorrecta',{
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        }

        setUserCredentials({
            email: '',
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        })
    }



    return (
        <div className=" max-w-7xl mx-auto text-center">
            <form
                className="flex flex-col gap-2 max-w-md mx-auto"
                typeof="submit"
                onSubmit={handleSubmit}
            >
                <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                    <FaUserCog className="text-gray-500" />
                    <input
                        className=" w-full placeholder:text-gray-500 outline-none"
                        placeholder="Email"
                        name="email"
                        value={userCredentials.email}
                        type={"email"}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                    <RiLockPasswordFill className="text-gray-500" />
                    <input
                        className=" w-full placeholder:text-gray-500 outline-none"
                        placeholder="Old Password"
                        name="oldPassword"
                        value={userCredentials.oldPassword}
                        type='password'
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                    <RiLockPasswordFill className="text-gray-500" />
                    <input
                        className=" w-full placeholder:text-gray-500 outline-none"
                        placeholder="New Password"
                        name="newPassword"
                        value={userCredentials.newPassword}
                        type='password'
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center gap-1 p-1 bg-white shadow rounded-md ">
                    <RiLockPasswordFill className="text-gray-500" />
                    <input
                        className=" w-full placeholder:text-gray-500 outline-none"
                        placeholder="Confirm Password"
                        name="confirmNewPassword"
                        value={userCredentials.confirmNewPassword}
                        type='password'
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="p-1 bg-black text-white shadow rounded-md uppercase font-medium outline-none">
                    Change Password
                </button>
            </form>
        </div>
    )
}
