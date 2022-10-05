import Component_Titlebar from "./Component_Titlebar.jsx"
import Component_EventWindow from "./Component_EventWindow.jsx"
import Component_ActivityWindow from "./Component_ActivityWindow.jsx"
import "./firebase.js"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react"
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

const [values, setValues] = useState({
    user: '',
    password: '',
    showPassword: false,
  });

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
    user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });

    
  }})

  return (
    isLoggedIn ?
    <div className="App">
      <Component_Titlebar />
      
  
    <div id="mainWindow">
        
        <Component_ActivityWindow />

        <Component_EventWindow />


      </div>
    </div>
  
:

<>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-user">User</InputLabel>
          <OutlinedInput
            id="outlined-adornment-user"
            type='text'
            value={values.user}
            onChange={handleChange('user')}
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
            label="User"
          />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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

setIsLoggedIn(true)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
console.log(errorMessage)
  })}>Login</Button>
  </>
  )
}
  
export default App
