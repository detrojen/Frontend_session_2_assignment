import { createContext } from "react";
import type { TThemeContext } from "../types/themeContextType";

export const ThemeContext = createContext<TThemeContext>({
    mode : "light",
    toggleTheme: ()=>{},
    theme: null
})