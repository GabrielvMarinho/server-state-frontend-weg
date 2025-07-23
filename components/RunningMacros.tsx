
interface Props{
    macrosRunning: [any]
}

export default function RunningMacros({macrosRunning}:Props){
    console.log(macrosRunning)
    var finalList = [...macrosRunning]
    finalList.length = 6;
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

                {finalList.map((macro, key) =>(
                    macro?
                    <div key={macro.name} className="macroSlot singleRunningMacro">
                        <h3>{macro.name}</h3>
                        <label>Iniciou: {macro.time_started}</label>
                    </div>
                    :
                    <div key={key} className="macroSlot singleEmptySlotMacro">
                        <p>Vazio</p>
                    </div>
                ))}
            </div>
        </section>
    )
}