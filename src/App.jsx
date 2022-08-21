import { useEffect, useState } from 'react'
import Component_Titlebar from "./Component_Titlebar.jsx"
import Component_EventWindow from "./Component_EventWindow.jsx"
import Component_ActivityWindow from "./Component_ActivityWindow.jsx"
import { db, querySnapshot } from "./firebase.js"
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import Component_EventWindow_NewEvent_Modal from "./Component_EventWindow_NewEvent_Modal"
import "./firebase.js"

import './App.css'
import "./Component_Titlebar.css"
import "./Component_EventWindow.css"
import "./Component_ActivityWindow.css"
import "./Component_EventWindow_NewEvent.css"
import "./Component_EventWindow_NewEvent_Modal.css"
import "./Component_EventWindow_EditEvent_Modal.css"

  
function App() {
  
  return (
    <div className="App">
      <Component_Titlebar />
      <div id="mainWindow">
        <Component_ActivityWindow />

        <Component_EventWindow />


      </div>
    </div>
  )
}

export default App
