import Component_Titlebar from "./Component_Titlebar.jsx"
import Component_EventWindow from "./Component_EventWindow.jsx"
import Component_ActivityWindow from "./Component_ActivityWindow.jsx"
import "./firebase.js"

import './App.css'
import "./Component_Titlebar.css"
import "./Component_EventWindow.css"
import "./Component_ActivityWindow.css"
import "./Component_ActivityWindow_NewActivity.css"
import "./Component_ActivityWindow_NewActivity_Modal.css"
import "./Component_ActivityWindow_EditActivity_Modal.css"
import "./Component_SwitchViews.css"
import "./Component_EventWindow_NewEvent.css"
import "./Component_EventWindow_NewEvent_Modal.css"
import "./Component_EventWindow_EditEvent_Modal.css"
import "./Component_ModalActionButtonContainer.css"
import "./Component_Modal_New_Edit.css"

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
