import {useState,useEffect} from "react"
import ProfileMenu from "./Component_ProfileMenu"

function Component_Titlebar({user}){

   const [date, setDate] = useState(new Date())
   const [userPic, setUserPic] = useState(user.providerData.photoURL ? user.providerData.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" )
   const [showProfileMenu, isShowProfileMenu] = useState(false)
   
    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000)

        return function cleanup(){
            clearInterval(timerID)
        }
    })

    function tick(){
        setDate(new Date())
    }

    return(
        <div id="component_titlebar">
            <div id="profileMenuIcon" style={{
                backgroundImage: `url(${userPic})`
            }}
            onClick={()=>{document.getElementById("profileMenu").classList.toggle("is-open")}}></div>
            <ProfileMenu user={user} userPic={userPic} isOpen={showProfileMenu} setIsOpen={isShowProfileMenu} />
            <h1>{user.providerData[0].displayName != null ? user.providerData[0].displayName.endsWith("s") ? `${user.providerData[0].displayName}'` : `${user.providerData[0].displayName}s` : "user"} KOSIF Dashboard</h1>
            <div className="timeZone">
                <div id="localtime" className="timeZoneItem">
                    <img src="switzerland-svgrepo-com.svg" />
                    {
                        `
                        ${date.getFullYear()} 
                        ${date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()} 
                        ${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}
                        ${date.getHours() < 10 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()}
                        `
                    }
                </div>
                <div id="utctime" className="timeZoneItem">
                    <img src="globe-showing-europe-africa-svgrepo-com.svg" />
                    {
                        `
                        ${date.getUTCFullYear()} 
                        ${date.getUTCMonth()+1 < 10 ? "0"+(date.getUTCMonth()+1) : date.getUTCMonth()} 
                        ${date.getUTCDate() < 10 ? "0"+date.getUTCDate() : date.getUTCDate()}
                        ${date.getUTCHours() < 10 ? "0"+date.getUTCHours() : date.getUTCHours()}:${date.getUTCMinutes() < 10 ? "0"+date.getUTCMinutes() : date.getUTCMinutes()}:${date.getUTCSeconds() < 10 ? "0"+date.getUTCSeconds() : date.getUTCSeconds()}
                        `
                    }
                </div>
            </div>
        </div>
    )
}

export default Component_Titlebar