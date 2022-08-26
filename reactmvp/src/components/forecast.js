import React, {useState} from "react"
import Conditions from "./conditions";

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({}); 
    let [cityState, setcityState] = useState({})
    let [city, setCity] = useState('')
    const uriEncodedCity = encodeURIComponent(city, cityState)
    function getForecast(e){
        e.preventDefault(); 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=imperial&appid=7c312d826c2a8ad178fecc2a373fc387`)
        .then(getState())
        .then((response) => response.json())
        .then(response=> {
            setResponseObj(response)
        })
    }
    function getState(e){
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${uriEncodedCity}, US&units=imperial&appid=7c312d826c2a8ad178fecc2a373fc387`)
        .then((response) => response.json())
        .then(response => {
            setcityState(response)
            console.log(response[0].state)
            
        })

    }
   
    return (
        <div>
            <h2>Current Weather</h2>
            <form onSubmit={getForecast}>
                <input 
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    
                    onChange={(event) =>
                         setCity(event.target.value)}
                    />
            </form>
            <Conditions 
            responseObj={responseObj}
            cityState={cityState} />
        </div>
    
    ); 
}

export default Forecast