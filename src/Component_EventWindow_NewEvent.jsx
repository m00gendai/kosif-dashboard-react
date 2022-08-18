import {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client'
import * as ReactDOMClient from 'react-dom/client'
import Component_EventWindow_NewEvent_Modal from "./Component_EventWindow_NewEvent_Modal"
import Component_EventWindow_Event from "./Component_EventWindow_Event"


function Component_EventWindow_NewEvent(){

    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)
   
    return(
        <div className="component_eventwindow_event" id="component_eventwindow_newevent">
            <button onClick={async () => {
                toggleModal()
                

                }}>{
                    `\u{229e} Create new Event`
                }</button>
                <Component_EventWindow_NewEvent_Modal show={modal} close={toggleModal}/>
        </div>
    )
}

export default Component_EventWindow_NewEvent