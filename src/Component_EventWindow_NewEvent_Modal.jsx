import {collection, addDoc} from "firebase/firestore"
import {db} from "./firebase.js"

function Component_EventWindow_NewEvent_Modal({show, close}){
    async function populateEventDB(eventName, eventTime){
        if(eventName == "" || eventTime == ""){
            alert("please")
        } else {
            await addDoc(collection(db, "events"),{
                name: eventName,
                time: eventTime,
                default: false
            })
            
        }
        close()   
    }

    return(
        <>
        {
        show ?
            <div id="component_eventwindow_newevent_modal" className="">
                <div id="component_Eventwindow_newevent_modalbody">
                    <h2>Create New Event</h2>
                    <div className="component_Eventwindow_newevent_modalbody_input_container">
                        <fieldset>
                            <legend>Event Name</legend>
                            <input type="text" placeholder="Coffee with Shra" id="newEventNameValue" required></input>
                        </fieldset>
                        <fieldset>
                            <legend>Event Start Time</legend>
                            <input type="text" pattern="[0-9]+" placeholder="0930" id="newEventTimeValue" required></input>
                        </fieldset>
                    </div>
                    <div className="component_Eventwindow_newevent_modalbody_button_container">
                        <button id="component_Eventwindow_newevent_modalbody_button_add" onClick={() =>{populateEventDB(document.getElementById("newEventNameValue").value, document.getElementById("newEventTimeValue").value)}}>{`\u{1F5F8}`}</button>
                        <button id="component_Eventwindow_newevent_modalbody_button_close" onClick={()=>close()}>{`\u{2717}`}</button>
                    </div>
               </div>
            </div>
        : 
            null
        }
        </>
    )
}

export default Component_EventWindow_NewEvent_Modal