import '../App.css'
 
 
function WeatherCard ({city,temperature,conditions,warning})
{
    let temperatureSelection = null;
    let conditionEmote = null;
    if( typeof(temperature) !== "number")
    {
        <p>Temperatura musi byc wartością numeryczną</p>
    }else{
        temperatureSelection = temperature
    }
    switch(conditions)
    {
        case"sunny":
        conditionEmote = "☀️"
        break;
        case "cloudy":
        conditionEmote ="☁";
        break;
        case "rainy":
        conditionEmote ="🌧️"
        break;
    }
    return(
        <>
            {city && <p>{conditionEmote} {city}, {temperatureSelection} °C</p>}
            {warning !== false && (
                <p> ⚠️ Ostrzeżenie: Możliwe burze</p>
            )}
        </>
    );
}
export default WeatherCard;