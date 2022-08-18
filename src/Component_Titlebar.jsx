import {useState,useEffect} from "react"

function Component_Titlebar(){
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000)

        return function cleanup(){
            clearInterval(timerID)
        }
    })

    function tick(){
        setDate(new Date())
    }

    return(
        <div id="component_titlebar">
            <h1>Christines KOSIF Dashboard</h1>
            <div className="timeZone">
                <div id="localtime" className="timeZoneItem">
                    {
                        `
                        \u{1f1e8}\u{1f1ed}
                        ${date.getFullYear()} 
                        ${date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()} 
                        ${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}
                        ${date.getHours() < 10 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()}
                        `
                    }
                </div>
                <div id="utctime" className="timeZoneItem">
                    {
                        `
                        \u{1f30d}
                        ${date.getUTCFullYear()} 
                        ${date.getUTCMonth()+1 < 10 ? "0"+(date.getUTCMonth()+1) : date.getUTCMonth()} 
                        ${date.getUTCDate() < 10 ? "0"+date.getUTCDate() : date.getUTCDate()}
                        ${date.getUTCHours() < 10 ? "0"+date.getUTCHours() : date.getUTCHours()}:${date.getUTCMinutes() < 10 ? "0"+date.getUTCMinutes() : date.getUTCMinutes()}:${date.getUTCSeconds() < 10 ? "0"+date.getUTCSeconds() : date.getUTCSeconds()}
                        `
                    }
                </div>
            </div>
        </div>
    )
}

export default Component_Titlebar