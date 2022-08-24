import {useState} from "react"
import Component_ActivityWindow_NewActivity_Modal from "./Component_ActivityWindow_NewActivity_Modal"

function Component_ActivityWindow_NewActivity(){
    const [activityModal, setActivityModal] = useState(false)
    const toggleActivityModal = () => setActivityModal(!activityModal)
   
    return(
        <div className="component_activitywindow_activity" id="component_activitywindow_newactivity">
            <button onClick={
                async () => {
                    toggleActivityModal()
                }
            }>
                {`\u{229e} Create new Activity`}
            </button>
            <Component_ActivityWindow_NewActivity_Modal show={activityModal} close={toggleActivityModal} />
        </div>
    )
}

export default Component_ActivityWindow_NewActivity