import {useState, useEffect} from "react"
import {collection, doc, addDoc, getDoc, setDoc} from "firebase/firestore"
import {db} from "./firebase.js"
import Component_ModalActionButtonContainer from "./Component_ModalActionButtonContainer.jsx"
import Component_Modal_New_Edit from "./Component_Modal_New_Edit.jsx"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

function Component_ActivityWindow_NewActivity_Modal({show, close}){



    return(
        <Component_Modal_New_Edit show={show} close={close}/>
    )
}

export default Component_ActivityWindow_NewActivity_Modal