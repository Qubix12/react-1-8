import { useState } from 'react'
import '../App.css'
function ButtonComponent({label, variant='primary', size='md', disabled=false}){
    const getColor = () => {
        if(variant === "primary") return 'blue';
        if(variant === "danger") return 'red';
        if(variant === "secondary") return 'green';
    }
    const getSize = () => {
        if(size === "md") return '20px';
        if(size == "sm") return '10px';
        if(size == "lg") return '30px';
    }
    return (
        <>
        <button className = {`alert-${variant}`} style={{backgroundColor : getColor(), fontSize: getSize(), margin: '5px'}} disabled={disabled}>{label}</button>
        </>
    )
}

export default ButtonComponent