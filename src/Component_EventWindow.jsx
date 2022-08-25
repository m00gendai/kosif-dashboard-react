import {useState, useEffect} from "react"
import Component_EventWindow_NewEvent from "./Component_EventWindow_NewEvent.jsx"
import Component_EventWindow_Event from "./Component_EventWindow_Event.jsx"
import { db } from "./firebase.js"
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";

import "./Component_EventWindow_Event.css"

function Component_EventWindow(){
    const [eventData, setEventData] = useState([])
    
    useEffect(() => {
        const queryEvents = query(collection(db, "events"), orderBy("time"));
        const eventSnapshot = onSnapshot(queryEvents, (querySnapshot) => {
            setEventData(querySnapshot.docs.map(doc => {
                return {
                    name: doc.data().name,
                    time: doc.data().time, 
                    isChecked: doc.data().checked,
                    default: doc.data().default,
                    firebaseId: doc.id,
                    visibility: doc.data().visibility
                }
            }))
        })
    },[])

    return(
        <div id="component_eventwindow">
            <Component_EventWindow_NewEvent />
            {
            eventData.map((event, index) => 
                <Component_EventWindow_Event 
                    key={index} 
                    title={event.name} 
                    time={event.time} 
                    default={event.default} 
                    firebaseId={event.firebaseId} 
                    isChecked={event.isChecked}
                    visibility={event.visibility}
                />
            )
            }  
        </div>
    )
}

export default Component_EventWindow