import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';

function App() {
  // creating latitude and longitude states
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  // useEffect function loads latitude and longitude functions when app is loaded/reloaded
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // fetch data from API using .env-keys and gotten lat, long values using async function
      // convert to JSON and call setData to store result into data object
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  // if asynchronous data returns as undefined, show empty div
  // pass data with prop weatherData from child component Weather.js
  return (
    <div className="App">
      <h1>Weather App</h1>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
