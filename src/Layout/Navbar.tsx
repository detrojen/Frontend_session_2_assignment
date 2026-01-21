import {  LucideMenu, LucideMoon, LucideSun, LucideUser2 } from "lucide-react"
import type { TNavbarProps } from "../types/navbarPropsType"
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Link } from "react-router-dom"

function Navbar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const {theme,toggleTheme, mode} = useContext(ThemeContext);
    return <>
        <div className={`border-b py-2 flex justify-between ${theme.card.bg} px-2 items-center`}>
            <img src="vite.svg"></img>
            <div className="flex gap-2">
                <Link to="" className={`hover:bg-blue-100 px-5 py-2 rounded-3xl ${theme.card.text} hover:text-black`}>Home</Link>
                <Link to="cart" className={`hover:bg-blue-100 px-5 py-2 rounded-3xl ${theme.card.text} hover:text-black`}>Cart</Link>
                <Link to="" className={`hover:bg-blue-100 px-5 py-2 rounded-3xl ${theme.card.text} hover:text-black`}>Contact us</Link>
            </div>
            <div>
                <button className={`${theme.btn}`} onClick={toggleTheme}>
                    {mode === "dark" ? <LucideMoon /> : <LucideSun />}
                </button>
                <span className="hidden sm:inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10">
                    <LucideUser2/>
                </span>
                <button onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} className="sm:hidden">
                    <LucideMenu/>
                </button>
            </div>
        </div>   
        
    </>
}

export default Navbar