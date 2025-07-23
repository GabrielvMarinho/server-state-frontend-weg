"use client"
import ChangeTheme from "@/components/ChangeTheme";
import RunningMacros from "@/components/RunningMacros";
import "@/components/style.css"
import { useEffect, useState } from "react";

export default function Home() {

    const [macrosRunning, updateMacrosRunning] = useState<any>([])
    useEffect(() =>{
        const ws_url = String(process.env["NEXT_PUBLIC_WS_URL"])
        const socket = new WebSocket(ws_url)
        console.log("new socket")
        socket.onmessage = (event) => {
            
            var json_content = JSON.parse(event.data)
            
            updateMacrosRunning(json_content)
        };
    }, [])
    
    return (
        <main>
            <header>            
                <h1 className="mainTitle"><span>SERVIDOR</span> STATUS</h1>
                <ChangeTheme></ChangeTheme>
            </header>
            <RunningMacros macrosRunning={macrosRunning}></RunningMacros>
        </main>
    );
}