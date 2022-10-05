function ProfileMenu({isOpen, setIsOpen}){
    return(
        <div id="profileMenu">
            <div id="closeProfileMenu" onClick={()=>setIsOpen(!isOpen)}>X</div>
        </div>
    )
}

export default ProfileMenu