import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// card displays weather info using weatherData from parent component App.js
const WeatherCard = ({weatherData}) => (
    <Card>
        <CardContent>
        <Typography variant="h3" component="div" gutterBottom>
            {weatherData.name}
        </Typography>
        </CardContent>
    </Card>
)

export default WeatherCard;