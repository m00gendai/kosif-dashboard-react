import {useState, useEffect, useRef} from "react"
import {doc, collection, addDoc, updateDoc} from "firebase/firestore"
import {db, querySnapshot} from "./firebase.js"

function Component_ActivityWindow_EditActivity_Modal({showActivityEditModal, closeActivityEditModal, activityEditTitle, activityEditTime, activityEditId}){
 async function populateActivityDB(activityName, activityTime){
     if(activityName == "" || activityTime == ""){
         alert("please")
     } else {
        await updateDoc(doc(db, "activities", activityEditId),{
                    name: activityName,
                    time: activityTime,

                })
                await updateDoc(doc(db, "events", activityEditId),{
                    name: activityName,
                    time: activityTime,

                })
                closeActivityEditModal()
    }}

    const [editActivityTitleState, setEditActivityTitleState] = useState(activityEditTitle)
    const [editActivityTimeState, setEditActivityTimeState] = useState(activityEditTime)

    const handleEditActivityTitleChange = event => {
        setEditActivityTitleState(event.target.value)
    }
    const handleEditActivityTimeChange = event => {
        setEditActivityTimeState(event.target.value)
    }

    return(
<>
{
showActivityEditModal ?
        <div id="component_activitywindow_editactivity_modal" className="">
            
            <div id="component_Activitywindow_editactivity_modalbody">
                <h2>Edit Activity</h2>
                <div className="component_Activitywindow_editactivity_modalbody_input_container">
                <fieldset>
                    <legend>Activity Name</legend>
                <input type="text" placeholder="Coffee with Shra" id="editActivityNameValue" required value={editActivityTitleState} onChange={handleEditActivityTitleChange}></input>
                </fieldset>
                <fieldset>
                    <legend>Activity Start Time</legend>
                <input type="text" pattern="[0-9]+" placeholder="0930" id="editActivityTimeValue" required value={editActivityTimeState} onChange={handleEditActivityTimeChange}></input>
                </fieldset>
                </div>
                <div className="component_Activitywindow_editactivity_modalbody_button_container">
                <button id="component_Activitywindow_editactivity_modalbody_button_add" onClick={() =>populateActivityDB(document.getElementById("editActivityNameValue").value, document.getElementById("editActivityTimeValue").value)}>{`\u{1F5F8}`}</button>
                <button id="component_Activitywindow_editactivity_modalbody_button_close" onClick={()=>closeActivityEditModal()}>{`\u{2717}`}</button>
                </div>
            </div>
            

        </div>
        : null
}
</>
    )
}

export default Component_ActivityWindow_EditActivity_Modal