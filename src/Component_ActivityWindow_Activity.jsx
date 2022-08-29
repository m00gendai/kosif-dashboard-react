import {useState, useEffect} from "react"
import Component_ActivityWindow_EditActivity_Modal from "./Component_ActivityWindow_EditActivity_Modal.jsx"
import {doc, deleteDoc, updateDoc} from "firebase/firestore"
import {db} from "./firebase.js"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatShapesIcon from '@mui/icons-material/FormatShapes'
import ModeIcon from '@mui/icons-material/Mode'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Component_ActivityWindow_Activity(props){

  async function deleteActivity(id, name, time){
    if(confirm(`Delete activity ${time} ${name}?`)){
      await deleteDoc(doc(db, "activities", id))
      await deleteDoc(doc(db, "events", id))
  }}

  const [editActivityModal, setEditActivityModal] = useState(false)
  const toggleEditActivityModal = () => setEditActivityModal(!editActivityModal)

  return(
    <div className={`component_activitywindow_activity component_activitywindow_activity_${props.type}`} id={`activity_${props.firebaseId}`}>
     <div className="component_activitywindow_activity_typeicon">
       {
         props.type == "Area" 
         ?
        <FormatShapesIcon sx={{ color: "#000",fontSize: "2rem" }}/>
         :
        <LocalFireDepartmentIcon sx={{ color: "#000", fontSize: "2rem" }}/>
         
       }
     </div>
     <div className="component_activitywindow_activity_text">
     <div className="component_activitywindow_activity_Text_title">
       {props.title}
     </div>
     <div className="component_activitywindow_activity_text_time">
       {props.time}
     </div>
     </div>
     <div className="component_activitywindow_activity_editfield">
       <ModeIcon onClick={async () => {
         toggleEditActivityModal()}
         } sx={{color: "green"}}/>
       <DeleteForeverIcon onClick={() => deleteActivity(props.firebaseId, props.title, props.time)} sx={{color: "red"}}/>
     </div>
        <Component_ActivityWindow_EditActivity_Modal showActivityEditModal={editActivityModal} closeActivityEditModal={toggleEditActivityModal} activityEditTitle={props.title} activityEditTime={props.time} activityEditId={props.firebaseId}/>
    </div>    
  )  
}

export default Component_ActivityWindow_Activity