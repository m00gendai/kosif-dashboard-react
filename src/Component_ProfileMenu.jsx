import "./Component_ProfileMenu.css"
import { getAuth, updateProfile, signOut} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {db} from "./firebase.js"
import {useState,useEffect} from "react"
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

function ProfileMenu({user, userPic, setUserPic, isOpen, setIsOpen, setIsLoggedIn}){
    const auth = getAuth();
    const storage = getStorage()
    
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

    function handleUpload(e){
      const upload = e.target.files[0]
      const picRef = ref(storage, upload.name);
      const picImagesRef = ref(storage, `${user.uid}/${upload.name}`);
      uploadBytes(picRef, upload).then((snapshot) => {
       
console.log(picImagesRef.fullPath)
       getDownloadURL(ref(storage, `${upload.name}`))
  .then((url) => {
    updateProfile(auth.currentUser, { photoURL: url});
    setUserPic(url)
  })




       setUserPic(picImagesRef.fullPath)
       


});

    }


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
                editName ? <Button variant="outlined" onClick={()=>doEditName(false)}>ok</Button> : <Button variant="outlined" onClick={()=>doEditName(true)}>edit</Button>}
                </></div>
                <div>
                  <input type="file" onChange={(e)=>handleUpload(e)} className="uploadImage" /><Button variant="outlined"
                onClick={async ()=>{
                  await setDoc(doc(db, "users", user.uid), {
            photoUrl: user.providerData[0].photoURL
});
                }}
                >Change</Button></div>
                <div><Button variant="outlined" onClick={()=>{signOut(auth).then(() => {
 setIsLoggedIn(false)
 console.log("Logged out")
}).catch((error) => {
  // An error happened.
})}}>Logout</Button></div>
                

    </>)
  })}
</div>
        </div>
    )
}

export default ProfileMenu