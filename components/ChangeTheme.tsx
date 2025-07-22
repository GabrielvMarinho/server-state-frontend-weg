
"use client"
import Moon from "@/icons/moon";
import Sun from "@/icons/sun";
import { getThemeCookies, setThemeCookies } from "@/utils/ThemeContext";
import { useEffect, useState } from "react";

export default function(){
    const [theme, setTheme] = useState<any>(null)
    useEffect(() =>{
        const themeF = async () =>{
            setTheme(await getThemeCookies()!) 
        }  
        themeF()
    }, [])
    console.log(theme)
    return (
        <div className="toggleTheme">
                <button className={theme=="dark"?"themeIconDiv selectedThemeIcon":"themeIconDiv"} onClick={() =>{setTheme("dark"); setThemeCookies("dark")}}>
                    <Moon height="28px" width="28px" color={theme=="dark"?"var(--background-contrast-color)":"var(--background-contrast-color)"}></Moon>
                </button>
            
                <button className={theme=="light"?"themeIconDiv selectedThemeIcon":"themeIconDiv"} onClick={() =>{setTheme("light"); setThemeCookies("light")}}>
                    <Sun height="28px" width="28px" color={theme=="light"?"var(--background-contrast-color)":"var(--background-contrast-color)"}></Sun>
                </button>
        </div>
    )
}