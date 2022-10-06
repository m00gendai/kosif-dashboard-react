import "./Component_ProfileMenu.css"
import { getAuth, updateProfile } from "firebase/auth";
import {useState,useEffect} from "react"
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function ProfileMenu({user, userPic, isOpen, setIsOpen}){
    const auth = getAuth();
    const [editName, doEditName] = useState(false)
   const [userName, setUserName] = useState(user.providerData.displayName)

    useEffect(() =>{
    updateProfile(auth.currentUser, {
  displayName: userName
}).then(() => {
  console.log("update")
  // ...
}).catch((error) => {
  // An error occurred
  // ...
})
    },[userName])
console.log(userName)
    return(
        <div id="profileMenu">
          <div id="profileMenuInner">
            <div id="closeProfileMenu" onClick={()=>{document.getElementById("profileMenu").classList.toggle("is-open")}}><CloseIcon sx={{ color: "white" }} /></div>
            {user.providerData.map((profile) => {
               return( <>
                <div id="profileMenuPic" style={{
                    backgroundImage: `url(${userPic})`
                }}></div>
    <div id="profileMenuName">
        <p>Name: {editName 
                ? 
                <input type="text" placeholder={`${profile.displayName}`} onChange={(e)=>setUserName(e.target.value)}/> 
                : 
                profile.displayName}</p>
                <>{
                editName ? <Button variant="outlined" onClick={()=>doEditName(false)}>ok</Button> : <Button variant="outlined" onClick={()=>doEditName(true)}>edit</Button>}</></div>

    </>)
  })}
</div>
        </div>
    )
}

export default ProfileMenu