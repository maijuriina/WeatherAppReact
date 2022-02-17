import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  // creating latitude and longitude states
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude: ", lat)
    console.log("Longitude: ", long)
  }, [lat, long]);

  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
