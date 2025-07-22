"use client"
import { BroadcastDTO } from "@/structures/BroadcastDTO"
import { useEffect, useState } from "react"
import ChangeTheme from "./ChangeTheme"

export default function(){
    
    const [broadcastObject, updateBroadcastObject] = useState<BroadcastDTO>({
            status: '',
            macros_running: [{
                time_started: '',
                name: ''
            }]
    })
    useEffect(() =>{
        const ws_url = String(process.env["NEXT_PUBLIC_WS_URL"])
        const socket = new WebSocket(ws_url)

        socket.onmessage = (event) => {
            var json_content = JSON.parse(event.data)
            console.log(broadcastObject)
            updateBroadcastObject(json_content)
            
        };
    }, [])
    
    
    
    useEffect(() =>{
        console.log("it changed")
    }, [broadcastObject])

    if(broadcastObject){
        return (
            <div>
                {broadcastObject?.status}        
            </div>
        )
    }
    
}