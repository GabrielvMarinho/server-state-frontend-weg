
export class WebSocketManager{
    socket: WebSocket;
    lastMessage: JSON;
    constructor(){
        const socket = new WebSocket(String(process.env["WS_URL"]))
        socket.onmessage = (event) => this.onMessage(event);
        this.socket = socket;
        this.lastMessage = JSON.parse("{}");
        
    }
    onMessage(event: any){
        console.log(event.data)
        this.lastMessage = event.data
    }
    
}