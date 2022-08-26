import {useState} from "react"
import Component_ActivityWindow_NewActivity_Modal from "./Component_ActivityWindow_NewActivity_Modal"
import PostAddIcon from '@mui/icons-material/PostAdd';

function Component_ActivityWindow_NewActivity(){
    const [activityModal, setActivityModal] = useState(false)
    const toggleActivityModal = () => setActivityModal(!activityModal)
   
    return(
        <>
        <div 
            className="component_activitywindow_activity_newactivity" 
            id="component_activitywindow_newactivity"
            onClick={
                async () => {
                    toggleActivityModal()
                }
            }
            >
            <PostAddIcon 
                sx={{fontSize: "3rem"}}/>
        </div>
        <Component_ActivityWindow_NewActivity_Modal show={activityModal} close={toggleActivityModal} />
        </>
    )
}

export default Component_ActivityWindow_NewActivity