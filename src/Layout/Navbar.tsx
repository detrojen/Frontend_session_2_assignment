import {  LucideMenu, LucideMoon, LucideSun, LucideUser2 } from "lucide-react"
import type { TNavbarProps } from "../types/navbarPropsType"
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

function Navbar({setAddProductFormRoute, setProductListRoute} : TNavbarProps){
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const {theme,toggleTheme, mode} = useContext(ThemeContext);
    return <>
        <div className={`border-b py-2 flex justify-between ${theme.card.bg} px-2 items-center`}>
            <img src="vite.svg"></img>
            <div className="hidden sm:flex gap-2">
                <a className={`hover:bg-blue-100 px-5 py-2 rounded-3xl ${theme.card.text} hover:text-black`} onClick={setProductListRoute}>Home</a>
                <a className={`hover:bg-blue-100 px-5 py-2 rounded-3xl ${theme.card.text} hover:text-black`}>About</a>
                <a className={`hover:bg-blue-100 px-5 py-2 rounded-3xl ${theme.card.text} hover:text-black`}>Contact us</a>
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
        {isSidebarOpen && <>
            <div className="bg-gray-700 w-7/10 h-dvh absolute transition-all sm:hidden">
                <div className="flex flex-col gap-2 p-4">
                <a 
                    className="w-fit hover:bg-blue-100 px-5 py-2 rounded-3xl text-white hover:text-black"
                    onClick={()=>{
                        setProductListRoute()
                        setIsSidebarOpen(false)
                    }}
                >Home</a>
                <a 
                    className="w-fit hover:bg-blue-100 px-5 py-2 rounded-3xl text-white hover:text-black" 
                    onClick={()=>{
                        setAddProductFormRoute()
                        setIsSidebarOpen(false);
                }}>Add-Product</a>
                <a className="w-fit hover:bg-blue-100 px-5 py-2 rounded-3xl text-white hover:text-black">About</a>
                <a className="w-fit hover:bg-blue-100 px-5 py-2 rounded-3xl text-white hover:text-black">Contact us</a>
            </div>
            </div>
        </>}
    </>
}

export default Navbar