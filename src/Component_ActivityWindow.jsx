import Component_SwitchViews from "./Component_SwitchViews.jsx"
import {useState, useEffect} from "react"
import Component_ActivityWindow_NewActivity from "./Component_ActivityWindow_NewActivity.jsx"
import Component_ActivityWindow_Activity from "./Component_ActivityWindow_Activity.jsx"
import { db } from "./firebase.js"
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";

import "./Component_ActivityWindow_Activity.css"

function Component_ActivityWindow(){
    const [activityData, setActivityData] = useState([])
    
    useEffect(() => {
        const queryActivities = query(collection(db, "activities"), orderBy("time"));
        const activitySnapshot = onSnapshot(queryActivities, (querySnapshot) => {
            setActivityData(querySnapshot.docs.map(doc => {
                return {
                    name: doc.data().name,
                    time: doc.data().time, 
                    firebaseId: doc.id,
                    type: doc.data().type
                }
            }))
        })
    },[])

    return(
        <div id="component_activitywindow">
            <Component_SwitchViews />
            <div id="component_activitywindow_activities">
            <Component_ActivityWindow_NewActivity />
            {
            activityData.map((activity, index) => 
                <Component_ActivityWindow_Activity key={index} title={activity.name} time={activity.time} firebaseId={activity.firebaseId} type={activity.type} />
            )
            }  
            </div>
        </div>
    )
}

export default Component_ActivityWindow

