import { useContext } from "react";
import { ThemeContext } from "./Theme";

function Content()
{
    const{Theme , toggleTheme} = useContext(ThemeContext);
    return(
        <>
        <div className={Theme === "light" ? "bg-white text-black h-screen flex items-center justify-center flex-col" : "bg-black text-white h-screen flex items-center justify-center flex-col"}>
            <h1 className="text-4xl mb-5">This is {Theme} Theme</h1>
            <button onClick={toggleTheme} className="absolute top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded text-4xl">
                Change the theme
            </button>
        </div>

        </>
    )

}

export default Content;