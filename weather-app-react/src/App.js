import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

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
    <div className="App" style={{ display:'flex', justifyContent:'center', margin: '30px' }}>
      <Card>
        <Box sx={{ width: '100%', height: 'auto', backgroundColor: 'primary.light', border: '0px', padding: '10px 0px'}}>
          <Typography variant="h4" component="div" color="white">
            Weather App
          </Typography>
        </Box>
        <CardContent>
          {(typeof data.main != 'undefined') ? (
            <Weather weatherData={data}/>
            ): (
            <div>
              <CircularProgress color="secondary" />
            </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
