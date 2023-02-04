import { useState } from 'react'
import { Navbar } from './Navbar'
import { SideNav } from './SideNav'



export const Menu = () => {


    const [open, setOpen] = useState(false)

    return (
            <>
                <Navbar setOpen={setOpen} />
                <SideNav open={open} setOpen={setOpen} />
            </>
    )
}
