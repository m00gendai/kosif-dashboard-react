import {collection, addDoc} from "firebase/firestore"
import {db} from "./firebase.js"
import Component_ModalActionButtonContainer from "./Component_ModalActionButtonContainer.jsx"

function Component_EventWindow_NewEvent_Modal({show, close}){
    async function populateEventDB(eventName, eventTime){
        if(eventName == ""){
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
            <div id="component_eventwindow_newevent_modal">
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
                    <Component_ModalActionButtonContainer 
                        confirm={() => populateEventDB(document.getElementById("newEventNameValue").value, document.getElementById("newEventTimeValue").value)}
                        deny={() => close()}
                    />
               </div>
            </div>
        : 
            null
        }
        </>
    )
}

export default Component_EventWindow_NewEvent_Modal