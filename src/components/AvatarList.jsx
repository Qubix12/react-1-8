import React from "react"

function AvatarList({users})
{
    return (
        <div>
            {
                users.map( user =>
                    <li key={user.id}> <img src={`https://i.pravatar.cc/60?u=${user.id}`} alt="Avatar użytkownika" /> Imię : {user.name} rola : {user.role}</li>
                )}


        </div>
    )

}

export default AvatarList