import Component_EventWindow_NewEvent from "./Component_EventWindow_NewEvent.jsx"
import Component_EventWindow_Event from "./Component_EventWindow_Event.jsx"
import { querySnapshot } from "./firebase.js"

import "./Component_EventWindow_Event.css"

let eventArray = []
querySnapshot.docs.map((doc, index) =>{
                        eventArray.push(
                            {key: index,
                             title: doc.data().name,
                             time: doc.data().time,
                            default: doc.data().default,
                            firebaseId: doc.id,
                            isChecked: doc.data().checked
                            }
                        )
                    })

eventArray.sort(function(a,b){
    return a.time - b.time
})

function Component_EventWindow(){
    return(
        <div id="component_eventwindow">
            <Component_EventWindow_NewEvent />
                {
                    eventArray.map((event, index) =>{
                        return(
                            <Component_EventWindow_Event key={index} title={event.title} time={event.time} default={event.default} firebaseId={event.firebaseId} isChecked={event.isChecked}/>
                        )
                    })
                }
                
        </div>
    )
}



export default Component_EventWindow