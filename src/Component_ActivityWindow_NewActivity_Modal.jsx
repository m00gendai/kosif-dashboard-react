import {useState, useEffect} from "react"
import {collection, doc, addDoc, getDoc, setDoc} from "firebase/firestore"
import {db} from "./firebase.js"

function Component_ActivityWindow_NewActivity_Modal({show, close}){

const [activityType, setActivityType] = useState("area")

    async function populateActivityDB(activityName, activityTime, activityType){
        if(activityName == "" || activityTime == ""){
            alert("please")
        } else {
            await addDoc(collection(db, "activities"),{
                name: activityName,
                time: activityTime,
                type: activityType
            }).then(docRef => {
                if(activityType == "firing"){
                    setDoc(doc(db, "events", docRef.id),{
                        name: activityName,
                        time: activityTime
                    })
                }
            })
        }
        close()   
    }

    return(
        <>
        {
        show ?
            <div id="component_activitywindow_newactivity_modal" className="">
                <div id="component_Activitywindow_newactivity_modalbody">
                    <h2>Create New Activity</h2>
                    <div className="component_Activitywindow_newactivity_modalbody_input_container">
                        <fieldset>
                            <legend>Activity Type</legend>
                            <input type="radio" id="newActivityTypeValue_Area" name="newActivityTypeValue" value="area" defaultChecked onChange={() => setActivityType("area")} />
                            <label htmlFor="newActivityTypeValue_Area">Area</label>
                            <input type="radio" id="newActivityTypeValue_Firing" name="newActivityTypeValue" value="firing" onChange={() => setActivityType("firing")}/>
                            <label htmlFor="newActivityTypeValue_Firing">Firing</label>
                        </fieldset>
                        <fieldset>
                            <legend>Activity Name</legend>
                            <input type="text" placeholder="Coffee with Shra" id="newActivityNameValue" required></input>
                        </fieldset>
                        <fieldset>
                            <legend>Activity Start Time</legend>
                            <input type="text" pattern="[0-9]+" placeholder="0930" id="newActivityTimeValue" required></input>
                        </fieldset>
                    </div>
                    <div className="component_Activitywindow_newactivity_modalbody_button_container">
                        <button id="component_Activitywindow_newactivity_modalbody_button_add" onClick={() =>{populateActivityDB(document.getElementById("newActivityNameValue").value, document.getElementById("newActivityTimeValue").value, activityType)}}>{`\u{1F5F8}`}</button>
                        <button id="component_Activitywindow_newactivity_modalbody_button_close" onClick={()=>close()}>{`\u{2717}`}</button>
                    </div>
               </div>
            </div>
        : 
            null
        }
        </>
    )
}

export default Component_ActivityWindow_NewActivity_Modal