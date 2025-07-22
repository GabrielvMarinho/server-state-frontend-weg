"use server"
import { cookies } from "next/headers"

export async function getThemeCookies(){
        
    const cookieStore = cookies()
    if(!cookieStore.get("theme")?.value){
        setThemeCookies("light")
    }
    return cookieStore.get("theme")?.value
}   
export async function setThemeCookies(theme: string){
    const cookieStore = cookies()
    console.log("new theme", theme)
    cookieStore.set("theme", theme)
}
