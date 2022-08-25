import {useState, useEffect, useRef} from "react"
import {doc, collection, addDoc, updateDoc, getDoc} from "firebase/firestore"
import {db, querySnapshot} from "./firebase.js"

function Component_ActivityWindow_EditActivity_Modal({showEditModal, closeEditModal, eventEditTitle, eventEditTime, eventEditId}){

 async function populateEventDB(eventName, eventTime){
     if(eventName == "" || eventTime == ""){
         alert("please")
     } else {
        await updateDoc(doc(db, "events",eventEditId),{
                    name: eventName,
                    time: eventTime,
                    default: false
                })
                const docSnap = await getDoc(doc(db, "activities", eventEditId))
                if(docSnap.exists()){
                    await updateDoc(doc(db, "activities",eventEditId),{
                        name: eventName,
                        time: eventTime,
                        default: false
                    })
                }
                closeEditModal()
    }}

    const [editEventTitleState, setEditEventTitleState] = useState(eventEditTitle)
    const [editEventTimeState, setEditEventTimeState] = useState(eventEditTime)

    const handleEditEventTitleChange = event => {
        setEditEventTitleState(event.target.value)
    }
    const handleEditEventTimeChange = event => {
        setEditEventTimeState(event.target.value)
    }

    return(
<>
{
showEditModal ?
        <div id="component_eventwindow_editevent_modal" className="">
            
            <div id="component_Eventwindow_editevent_modalbody">
                <h2>Edit Event</h2>
                <div className="component_Eventwindow_editevent_modalbody_input_container">
                <fieldset>
                    <legend>Event Name</legend>
                <input type="text" placeholder="Coffee with Shra" id="editEventNameValue" required value={editEventTitleState} onChange={handleEditEventTitleChange}></input>
                </fieldset>
                <fieldset>
                    <legend>Event Start Time</legend>
                <input type="text" pattern="[0-9]+" placeholder="0930" id="editEventTimeValue" required value={editEventTimeState} onChange={handleEditEventTimeChange}></input>
                </fieldset>
                </div>
                <div className="component_Eventwindow_editevent_modalbody_button_container">
                <button id="component_Eventwindow_editevent_modalbody_button_add" onClick={() =>populateEventDB(document.getElementById("editEventNameValue").value, document.getElementById("editEventTimeValue").value)}>{`\u{1F5F8}`}</button>
                <button id="component_Eventwindow_editevent_modalbody_button_close" onClick={()=>closeEditModal()}>{`\u{2717}`}</button>
                </div>
            </div>
            

        </div>
        : null
}
</>
    )
}

export default Component_ActivityWindow_EditActivity_Modal