import {  useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useTheme } from "../hooks/useTheme";
import { useLocalStorage } from "../hooks/useLocalStorage";

function ThemeContextProvider({children}){
    const {data:mode,updateLocalStorageData:updateModeInLocalStorage} = useLocalStorage("theme","light")
    const {theme,updateTheme} = useTheme(mode)
    const toggleTheme = () => {
        updateModeInLocalStorage(mode==="dark"? "light" : "dark")
        updateTheme(mode==="dark"? "light" : "dark")
    }
    return <ThemeContext.Provider value={{ mode, toggleTheme, theme}}>
            {children}
         </ThemeContext.Provider>
}

export default ThemeContextProvider