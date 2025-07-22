"use client"
import { BroadcastDTO } from "@/structures/BroadcastDTO"
import { useEffect, useState } from "react"
import ChangeTheme from "./ChangeTheme"
import QueueOfMacros from "./RunningMacros"
import RunningMacros from "./RunningMacros"

export default function(){
    
    
    if(broadcastObject){
        return (
            <div>
                {broadcastObject?.status}        
            </div>
        )
    }
    
}