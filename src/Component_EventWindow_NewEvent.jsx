import {useState} from "react"
import Component_EventWindow_NewEvent_Modal from "./Component_EventWindow_NewEvent_Modal"

function Component_EventWindow_NewEvent(){
    const [eventModal, setEventModal] = useState(false)
    const toggleEventModal = () => setEventModal(!eventModal)
   
    return(
        <div className="component_eventwindow_event" id="component_eventwindow_newevent">
            <button onClick={
                async () => {
                    toggleEventModal()
                }
            }>
                {`\u{229e} Create new Event`}
            </button>
            <Component_EventWindow_NewEvent_Modal show={eventModal} close={toggleEventModal} />
        </div>
    )
}

export default Component_EventWindow_NewEvent