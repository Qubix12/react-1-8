import { useState } from 'react'
import '../App.css'
const days = new Date().getDate();
const month = new Date().getMonth()+1;
const year = new Date().getFullYear();
function DateTime(){
    return(
        <>
        <p>{days}.{month}.{year}</p>
        </>
    )
}

export default DateTime