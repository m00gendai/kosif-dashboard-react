import {useState, useEffect} from "react"
import Component_EventWindow_EditEvent_Modal from "./Component_EventWindow_EditEvent_Modal"
import {doc, deleteDoc, updateDoc} from "firebase/firestore"
import {db} from "./firebase.js"

function Component_ActivityWindow_Activity(props){

  async function deleteEvent(id, name, time){
    if(confirm(`Delete event ${time} ${name}?`)){
      await deleteDoc(doc(db, "events", id))
  }}

  const [editmodal, setEditmodal] = useState(false)
    const toggleEditmodal = () => setEditmodal(!editmodal)



  return(
    <div className="component_activitywindow_activity" id={`event_${props.firebaseId}`}>
      {props.title} {props.time}
        <Component_EventWindow_EditEvent_Modal showEditModal={editmodal} closeEditModal={toggleEditmodal} eventEditTitle={props.title} eventEditTime={props.time}/>
    </div>    
  )  
}

export default Component_ActivityWindow_Activity