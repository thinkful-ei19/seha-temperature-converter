import React from 'react';

export default function TemperatureInputs(props) {
    
        const temperature = props.temperature;
       
    
        return (
            <fieldset className="table">
                <legend>Enter temperature in {props.scale}:</legend>
                <input value={temperature} onChange={(e) => props.onChange(e.target.value)} />
            </fieldset>
        );
    }



 

