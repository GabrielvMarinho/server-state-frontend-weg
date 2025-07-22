import { Macro } from "@/structures/Macro"
import { Macondo } from "next/font/google"

export default function(macrosRunning: [Macro]){

    return(
        <div>
            {macrosRunning.map(macro =>{
                return <div>
                    <h2>{macro.name}</h2>
                    <p>Time started: {macro.name}</p>
                </div>
            })}
        </div>
    )
}