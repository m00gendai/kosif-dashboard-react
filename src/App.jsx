import Component_Titlebar from "./Component_Titlebar.jsx"
import Component_EventWindow from "./Component_EventWindow.jsx"
import Component_ActivityWindow from "./Component_ActivityWindow.jsx"
import "./firebase.js"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect} from "react"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



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

const auth = getAuth();
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [setUser, doSetUser] = useState(null)
const [loginError, setLoginError] = useState ("")

const [values, setValues] = useState({
    user: '',
    password: '',
    showPassword: false,
  });

  useEffect(()=>{
    if(loginError != ""){
    document.getElementById("loginError").style.display = "flex"
    }
  },[loginError])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };




onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;
    

    
  }})

  return (
    isLoggedIn ?
    <div className="App">
      <Component_Titlebar user={setUser}/>
      
  
    <div id="mainWindow">
        
        <Component_ActivityWindow />

        <Component_EventWindow />


      </div>
    </div>
  
:

<div className="login">
  <div className="loginForm">
    <div className="loginFormElements">
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-user">email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-user"
            type='text'
            value={values.user}
            onChange={handleChange('user')}
            label="User"
          />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" onClick={()=>signInWithEmailAndPassword(auth, values.user, values.password)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
doSetUser(user)
setIsLoggedIn(true)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setLoginError(error.message)
  })}>Login</Button>
  <Button variant="outlined">Forgot Password</Button>
  </div>
  <div id="loginError">{loginError}</div>
  </div>
  </div>
  )
}
  
export default App
