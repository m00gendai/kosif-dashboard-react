import {useState, useEffect, useRef} from "react"
import {doc, collection, addDoc, updateDoc} from "firebase/firestore"
import {db, querySnapshot} from "./firebase.js"
import Component_ModalActionButtonContainer from "./Component_ModalActionButtonContainer.jsx"
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';

function Component_ActivityWindow_EditActivity_Modal({showActivityEditModal, closeActivityEditModal, activityEditTitle, setActivityName, activityEditTime, setActivityTime, activityEditId, type}){
 async function populateActivityDB(activityName, activityTime){
    console.log(type)
     if(activityName == "" || activityTime == ""){
         alert("please")
     } else {
       if(type == "Area"){
        await updateDoc(doc(db, "activities", activityEditId),{
                    name: activityName,
                    time: activityTime,

                })
                closeActivityEditModal()
            } else if(type =="Firing"){
                await updateDoc(doc(db, "activities", activityEditId),{
                    name: activityName,
                    time: activityTime,

                })
                await updateDoc(doc(db, "events", activityEditId),{
                    name: activityName,
                    time: activityTime,

                })
                closeActivityEditModal()
            }
    }}

    const [editActivityTitleState, setEditActivityTitleState] = useState(activityEditTitle)
    const [editActivityTimeState, setEditActivityTimeState] = useState(activityEditTime)

    const handleEditActivityTitleChange = event => {
        setEditActivityTitleState(event)
        setActivityName(event)
    }
    const handleEditActivityTimeChange = event => {
        setEditActivityTimeState(event)
        setActivityTime(event)
    }

    return(
<>
{
showActivityEditModal ?
    <Backdrop  
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showActivityEditModal}
    >
                <div className="Component_Modal_New_Edit_Body">
                    <h2>Edit</h2>
                    <div className="Component_Modal_New_Edit_Input_Container">
                        <TextField
                            required
                            id="newActivityNameValue"
                            label="Activity Name"
                            placeholder="Coffee with Shra"
                            value={activityEditTitle}
                            onChange={(e) => {
                                handleEditActivityTitleChange(e.target.value)
                            }}
                        />
                        <TextField
                            required
                            id="newActivityTimeValue"
                            label="Activity Time"
                            placeholder="0930"
                            value={activityEditTime}
                            onChange={(e) => {
                                handleEditActivityTimeChange(e.target.value)
                            }}
                        />
                    </div>
                    <Component_ModalActionButtonContainer
                        confirm={() => {console.log(editActivityTitleState);populateActivityDB(editActivityTitleState, editActivityTimeState)}}
                        deny={()=>closeActivityEditModal()}
                    />
                </div>

    </Backdrop>
        : null
}
</>
    )
}

export default Component_ActivityWindow_EditActivity_Modal