import { useState } from 'react'
import '../App.css'

function Analiza(){
const userName = 'Jan Kowalski'; 
const userAge = 28; 
const profile = { city: 'Kraków' }; 
const greeting = "witaj";
return(
<>
    <div class="profile"> 
 <h1>{ greeting}</h1> 
 <p>Imię: {userName}, wiek: {userAge}</p> 
 <p>Miasto: {profile.city}</p> 
 <span>Godzina: {new Date().getHours()}:{new Date().getMinutes()}</span> 
 </div>
</>
)
}
/*
<h1>{ const greeting = 'Witaj'; greeting }</h1>
trzeba zmienic na 
 const greeting = "witaj" i <h1>{ greeting}</h1>
 <p>Miasto: {profile}</p> na <p>Miasto: {profile.city}</p>     
*/
export default Analiza