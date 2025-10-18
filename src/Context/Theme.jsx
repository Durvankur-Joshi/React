import { createContext } from "react";
import { useState } from "react";

export const ThemeContext  = createContext();

export default function ThemeProvider({children})
{
    const [Theme, setTheme] = useState("light");

     function toggleTheme()
    {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }
    return(
        <>
        <ThemeContext.Provider value={{Theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )

}

