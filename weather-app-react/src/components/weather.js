import React from 'react';

// card displays weather info using weatherData from parent component App.js
const WeatherCard = ({weatherData}) => (
    <div>
        <h1>{weatherData.name}</h1>
    </div>
)

export default WeatherCard;