"use client"
import ChangeTheme from "@/components/ChangeTheme";
import RunningMacros from "@/components/RunningMacros";
import "@/components/style.css"
import { BroadcastDTO } from "@/structures/BroadcastDTO";
import { useEffect, useState } from "react";

export default function Home() {

    const [broadcastObject, updateBroadcastObject] = useState<BroadcastDTO>({
            status: '',
            macros_running: []
    })
    useEffect(() =>{
        const ws_url = String(process.env["NEXT_PUBLIC_WS_URL"])
        const socket = new WebSocket(ws_url)

        socket.onmessage = (event) => {
            var json_content = JSON.parse(event.data)
            updateBroadcastObject(json_content)
        };
    }, [])
    
    return (
        <main>
            <header>            
                <h1 className="mainTitle"><span>SERVIDOR</span> STATUS</h1>
                <ChangeTheme></ChangeTheme>
            </header>
            <RunningMacros macrosRunning={broadcastObject.macros_running}></RunningMacros>
        </main>
    );
}