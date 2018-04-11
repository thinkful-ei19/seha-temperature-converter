import React from 'react';
import TemperatureInputs from './TemperatureInputs';


function WaterBoilingPoint(props) {
    if (props.celsius >= 100) {
       return <p>'The water would boil.'</p>
    } else { 
    return <p>'The water would not boil.'</p>
} 
}
function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5/9;
}

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function Calculate(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    return(Math.round(output * 1000) / 1000).toString();
}
export default class Converter extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            temperature: '',
            scale: ''
            }
        }
    
    FahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }
    CelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }
    
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? Calculate(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? Calculate(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInputs scale='Celsius' temperature={celsius} onChange={(e) => this.CelsiusChange(e)} />
                <TemperatureInputs scale='Fahrenheit' temperature={fahrenheit} onChange={(e) => this.FahrenheitChange(e)} />
                <WaterBoilingPoint celsius={parseFloat(celsius)} />
            </div>
        );
    }
}