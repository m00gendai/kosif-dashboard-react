import {useState} from "react"
import Component_EventWindow_NewEvent_Modal from "./Component_EventWindow_NewEvent_Modal"
import AddTaskIcon from '@mui/icons-material/AddTask';

function Component_EventWindow_NewEvent(){
    const [eventModal, setEventModal] = useState(false)
    const toggleEventModal = () => setEventModal(!eventModal)
   
    return(
        <>
        <div 
            className="component_eventwindow_event" 
            id="component_eventwindow_newevent"
            onClick={
                async () => {
                    toggleEventModal()
                }
            }>
            <AddTaskIcon />
            </div>
            <Component_EventWindow_NewEvent_Modal show={eventModal} close={toggleEventModal} />
        </>
    )
}

export default Component_EventWindow_NewEvent