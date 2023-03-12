import { auth } from "@/main"
import { updatePassword } from "firebase/auth"
import { ChangeEvent, useState } from "react"
import { FaUserCog } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"

export const CambiarPassword = () => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        oldPassword: '',
        newPassword: ''
    })


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
            if(user){
                await updatePassword(user, userCredentials.newPassword)
                console.log('Cambio de contrasena con exito');
            }
        } catch (error) {
            console.log(error);
        }

        setUserCredentials({
            email: '',
            oldPassword: '',
            newPassword: ''
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
