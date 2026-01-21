import { useState } from "react"

const lightTheme = {
    card : {
        bg: "bg-white",
        text: "text-black"
    },
    btn : "rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
}
const darkTheme = {
    card : {
        bg: "bg-black",
        text: "text-white"
    },
    btn : "rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
}
export const useTheme = (mode:string) => {
    const [theme,setTheme] = useState(mode==="dark"? darkTheme: lightTheme)
    const updateTheme = (mode : string) => { 
        setTheme(mode==="dark"? darkTheme: lightTheme)
    }

    return {theme,updateTheme}
}