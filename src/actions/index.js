import axios from 'axios';
import keys from '../config/keys'

//const WEATHER_API_KEY = '3a94b715e87f028e09b0374ec1410d45';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${keys.weatherApiKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city)  {
    const weatherUrl = `${WEATHER_ROOT_URL}&q=${city},us`;
    const request = axios.get(weatherUrl);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

