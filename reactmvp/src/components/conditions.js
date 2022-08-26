import React from "react";

const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ? 
            <div>
                <p>In {props.responseObj.name}, {props.cityState[0].state} </p>
                <p>It is currently {Math.round(props.responseObj.main.temp)} degrees with  {props.responseObj.weather[0].description}</p>
                
            </div>
            :null
            }
        </div>
    )
}

export default Conditions