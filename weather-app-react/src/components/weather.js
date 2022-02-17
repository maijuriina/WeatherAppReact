import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import Opacity from '@mui/icons-material/Opacity';
import Percent from '@mui/icons-material/Percent';
import PanTool from '@mui/icons-material/PanTool';
import Air from '@mui/icons-material/Air';
import TextSnippet from '@mui/icons-material/TextSnippet';
import ListItemText from '@mui/material/ListItemText';

// card displays weather info using weatherData from parent component App.js
const WeatherCard = ({weatherData}) => (
    <Card sx={{ padding: '20px', margin: '20px'}}>
        <CardContent>
        <Typography variant="description" component="div" gutterBottom>
            {moment().format('LL')}
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
            {weatherData.name}
        </Typography>
        <List>
            <ListItem>
                <ListItemIcon>
                    <ThermostatIcon/>
                </ListItemIcon>
                <Typography variant="h5" component="div">
                {weatherData.main.temp} &deg;C
                </Typography>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PanTool/>
                </ListItemIcon>
                <Typography variant="h5" component="div">
                {weatherData.main.feels_like} &deg;C
                </Typography>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Opacity/>
                    <Percent/>
                </ListItemIcon>
                <Typography variant="h5" component="div">
                {weatherData.main.humidity}
                </Typography>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <Air/>
                </ListItemIcon>
                <Typography variant="h5" component="div">
                {weatherData.wind.speed}
                </Typography>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TextSnippet/>
                </ListItemIcon>
                <Typography variant="h5" component="div">
                {weatherData.weather[0].description}
                </Typography>
            </ListItem>
        </List>
        </CardContent>
    </Card>
)

export default WeatherCard;