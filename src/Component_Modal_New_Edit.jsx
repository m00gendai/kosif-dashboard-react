import {useState, useEffect} from "react"
import {collection, doc, addDoc, getDoc, setDoc} from "firebase/firestore"
import {db} from "./firebase.js"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Component_ModalActionButtonContainer from "./Component_ModalActionButtonContainer.jsx"
import Backdrop from '@mui/material/Backdrop';



function Component_Modal_New_Edit({show, close, type}){
    const [activityType, setActivityType] = useState("Area")
    const [newActivityName, setNewActivityName] = useState("")
    const [newActivityTime, setNewActivityTime] = useState("")

    useEffect(() =>{
        setActivityType("Area");
        setNewActivityName("")
        setNewActivityTime("")
    },[show])

const handleChange = event => {
    setActivityType(event.target.value)
}

async function populateActivityDB(activityName, activityTime, activityType){
        if(activityName == "" || activityTime == ""){
            alert("please")
        } else {
            await addDoc(collection(db, "activities"),{
                name: activityName,
                time: activityTime,
                type: activityType
            }).then(docRef => {
                if(activityType == "Firing"){
                    setDoc(doc(db, "events", docRef.id),{
                        name: activityName,
                        time: activityTime,
                        default: false,
                        checked: false,
                    })
                }
            })
        }
        close()   
    }
    
    return(
        <Backdrop  
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={show}
        >
            <div className="Component_Modal_New_Edit_Body">
                <h2>Create new {type}</h2>
                <div className="Component_Modal_New_Edit_Input_Container">
                    <FormControl>
                        <FormLabel id="new_activity_form">Activity Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="new_activity_form_group_label"
                            defaultValue={activityType}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel 
                                value="Area" 
                                control={<Radio />} 
                                label="Area" 
                                onChange={handleChange}
                            />
                            <FormControlLabel 
                                value="Firing" 
                                control={<Radio />} 
                                label="Firing" 
                                onChange={handleChange}
                            />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        required
                        id="newActivityNameValue"
                        label="Activity Name"
                        placeholder="Coffee with Shra"
                        value={newActivityName}
                        onChange={(e) => {
                            setNewActivityName(e.target.value)
                        }}
                    />
                    <TextField
                        required
                        id="newActivityTimeValue"
                        label="Activity Time"
                        placeholder="0930"
                        value={newActivityTime}
                        onChange={(e) => {
                            setNewActivityTime(e.target.value)
                        }}
                    />
                </div>
                <Component_ModalActionButtonContainer
                    confirm={() => populateActivityDB(document.getElementById("newActivityNameValue").value, document.getElementById("newActivityTimeValue").value, activityType)}
                    deny={() => close()}
                />
            </div>
        </Backdrop>
    )
}

export default Component_Modal_New_Edit