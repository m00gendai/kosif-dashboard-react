import {useState, useEffect} from "react"
import Component_EventWindow_EditEvent_Modal from "./Component_EventWindow_EditEvent_Modal"
import {doc, deleteDoc, updateDoc, getDoc} from "firebase/firestore"
import {db} from "./firebase.js"

function Component_EventWindow_Event(props){

  const [date, setDate] = useState(new Date())
  const [color, setColor] = useState("white")
  const [checked, setChecked] = useState(false)
  const [handler, setHandler] = useState("")
  const [targetId, setTargetId] = useState("")

  useEffect(()=>{
    props.isChecked ? setChecked(true) : null
  },[])

  useEffect(() => {
    setEventState();
  },[checked, handler, targetId])

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    if( checked){
      document.getElementById(`event_${props.firebaseId}`).classList.add("component_eventwindow_event_green")
    } else if(!checked){
      document.getElementById(`event_${props.firebaseId}`).classList.remove("component_eventwindow_event_green")
    }
    return function cleanup(){
      clearInterval(timerID)
    }
  })

  function tick(){
    setDate(new Date())
    Deadline()
  }

  function Deadline(){
    const x = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${parseInt(props.time.substr(0,2))}:${parseInt(props.time.substr(2,4))}:${0}`).getTime()
    const eventDeadlineTime = (((x-date.getTime())/1000)/60)
    if(eventDeadlineTime > 30){
      setColor("white")
    } else if(eventDeadlineTime < 30 && eventDeadlineTime > 20){
      setColor("yellow")
    }else if(eventDeadlineTime < 20 && eventDeadlineTime > 10){
      setColor("orange")
    } else if(eventDeadlineTime < 10) {
      setColor("red")
    }
  }

  async function setEventState(){
    if(targetId != ""){
      await updateDoc(doc(db, "events", targetId), {
        checked: handler.target.checked
      })
    }
  }

  async function deleteEvent(id, name, time){
    if(confirm(`Delete event ${time} ${name}?`)){
      await deleteDoc(doc(db, "events", id))
      const docSnap = await getDoc(doc(db, "activities", id));
      if (docSnap.exists()) {
        await deleteDoc(doc(db, "activities", id))
      }
    }
  }

  const [editmodal, setEditmodal] = useState(false)
    const toggleEditmodal = () => setEditmodal(!editmodal)



  return(
    <div className={`component_eventwindow_event component_eventwindow_event_${color}`} id={`event_${props.firebaseId}`}>
      <input type="checkbox" checked={checked}id={`event_checkbox_${props.firebaseId}`} onChange={(e) => {setChecked(!checked);setHandler(e); setTargetId(props.firebaseId)}} ></input>
      <div className="eventTextField">
        {props.time} {props.title}</div> {props.default ? 
        "" 
        : 
        <div className="eventEditField">
          <img className="eventEditFieldAction" onClick={() => deleteEvent(props.firebaseId, props.title, props.time)} src="trash-svgrepo-com.svg" />
          <img className="eventEditFieldAction" onClick={async () => {
                toggleEditmodal()
                }} src="pencil-svgrepo-com.svg" />
        </div>}
        <Component_EventWindow_EditEvent_Modal showEditModal={editmodal} closeEditModal={toggleEditmodal} eventEditTitle={props.title} eventEditTime={props.time} eventEditId={props.firebaseId}/>
    </div>    
  )  
}

export default Component_EventWindow_Event