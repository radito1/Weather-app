import { ChangeEvent, useState } from "react";
import WeatherCard from "./WeatherCard";
import '../styles/WeatherSearch.css'

export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

function WeatherSearch() {
    const [input, setInput] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const fetchWeatherByCoordinates = (lat: string, lon: string) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6bb3ac90e06b38201400c242a9404c2&units=metric`
        )
            .then((response) => {
                return response.json();
            })
            .then((weatherData: WeatherData ) => {
                setWeather(weatherData);
                console.log("Weather data by coordinates:", weather);
            })
            .catch((error) => {
                console.error("Error fetching weather data by coordinates:", error);
            });
    };

    const fetchData = (location: string) => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=c6bb3ac90e06b38201400c242a9404c2`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    fetchWeatherByCoordinates(lat, lon);
                }
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    };

    const handleSearchClick = () => {
        fetchData(input);
    };

    return (
        <div >
            <div className="main-container">
                <h2 className="location-text">Enter Location</h2>
                <input
                    className="search-field"
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <button className="search-button" onClick={handleSearchClick}>
                    Search
                </button>
            </div>

            <div>{weather && <WeatherCard weather={weather} />}</div>
        </div>
    );
}

export default WeatherSearch;
