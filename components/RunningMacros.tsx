import { Macro } from "@/structures/Macro";
interface Props{
    macrosRunning: [Macro]
}
export default function({macrosRunning}:Props){
    var finalList = [...macrosRunning]
    finalList.length = 6;
    finalList.map(macro => console.log(macro))
    var numberOfMacros = 6;
    for(let i=0; i< finalList.length; i++){
        if(finalList[i] == undefined){
            numberOfMacros--
            finalList[i] = null
        }
    }
    return(
        <section className="capacityData">
            <h2 className="subTitle"><span>Capacidade</span> {numberOfMacros}/6</h2>
            <div className="runningMacros">

                {finalList.map(macro =>(
                    macro?
                    <div className="macroSlot singleRunningMacro">
                        <h3>{macro.name}</h3>
                        <label>Começou: {macro.time_started}</label>
                    </div>
                    :

                    <div className="macroSlot singleEmptySlotMacro">
                        <p>Vazio</p>
                    </div>
                ))}
            </div>
        </section>
    )
}