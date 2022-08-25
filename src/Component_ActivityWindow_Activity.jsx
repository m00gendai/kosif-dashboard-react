import {useState, useEffect} from "react"
import Component_ActivityWindow_EditActivity_Modal from "./Component_ActivityWindow_EditActivity_Modal.jsx"
import {doc, deleteDoc, updateDoc} from "firebase/firestore"
import {db} from "./firebase.js"

function Component_ActivityWindow_Activity(props){

  async function deleteActivity(id, name, time){
    if(confirm(`Delete activity ${time} ${name}?`)){
      await deleteDoc(doc(db, "activities", id))
  }}

  const [editActivityModal, setEditActivityModal] = useState(false)
  const toggleEditActivityModal = () => setEditActivityModal(!editActivityModal)

  return(
    <div className="component_activitywindow_activity" id={`event_${props.firebaseId}`}>
     <div className="component_activitywindow_activity_typeicon">
       {
         props.type == "area" 
         ?
         <img src="switzerland-map-country-land-svgrepo-com.svg" />
         :
         <img src="cannon-war-svgrepo-com.svg" />
         
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
       <img onClick={async () => {
         toggleEditActivityModal()}
         } src="pencil-svgrepo-com.svg" className="component_activitywindow_activity_editfield_action" />
       <img onClick={() => deleteActivity(props.firebaseId, props.title, props.time)} src="trash-svgrepo-com.svg" className="component_activitywindow_activity_editfield_action" />
     </div>
        <Component_ActivityWindow_EditActivity_Modal showActivityEditModal={editActivityModal} closeActivityEditModal={toggleEditActivityModal} activityEditTitle={props.title} activityEditTime={props.time} activityEditId={props.firebaseId}/>
    </div>    
  )  
}

export default Component_ActivityWindow_Activity