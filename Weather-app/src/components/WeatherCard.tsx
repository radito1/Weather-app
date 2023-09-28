import '../styles/WeatherCard.css'

import { WeatherData } from './WeatherSearch';

interface WeatherCardInterface {
    weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardInterface) => {

    const iconBaseUrl = "http://openweathermap.org/img/w/";

    const iconUrl = `${iconBaseUrl}${weather.weather[0].icon}.png`;

    return (
        <div className="weather-card-container">
            <div className="top-section">
                <img src={iconUrl} alt="Weather Icon" />
            </div>

            <div className="bottom-section">
                <div className="current-temp-container">
                    <div> Current temp: {weather.main.temp} °C</div>
                </div>
                <div className="min-max-temp-container">
                    <div>Min temp: {weather.main.temp_min} °C</div>
                    <div>Max temp: {weather.main.temp_max} °C</div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
