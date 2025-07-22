import { BroadcastDTO } from "@/structures/BroadcastDTO"

export class WebSocketManager{
    socket: WebSocket;
    broadcast: BroadcastDTO | null;
    
    constructor(){
        const socket = new WebSocket(String(process.env["WS_URL"]))
        socket.onmessage = (event) => this.onMessage(event);
        this.socket = socket;
        this.broadcast = null;
    }
    onMessage(event: any){
        var broadcast: BroadcastDTO = event.data
        this.broadcast = broadcast
    }
    
}
