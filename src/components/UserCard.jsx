import { useState } from 'react'
import '../App.css'
function UserCard({name,role,avatarUrl,isOnline=false}){
    return(
        <>
        <p>{name}</p>
        <p>{role}</p>
        <img src={avatarUrl} alt="Logo Vite" style={{width:"40px"}} />
        <p>{isOnline}</p>
        </>
    )
}

export default UserCard