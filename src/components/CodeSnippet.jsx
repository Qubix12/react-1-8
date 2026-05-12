import { useState } from 'react'
import '../App.css'

function Code(props){
    return(
        <>
        <h1>{props.title}</h1>
        <p>{props.language}</p>
        <pre><code>{props.code}</code></pre>
        </>
    )
}

export default Code