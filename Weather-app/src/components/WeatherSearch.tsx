import { ChangeEvent, useState } from "react";

function WeatherSearch() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState();

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
      .then((weatherData) => {
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
    <div className="main-container">
      <input
        className="search-field"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
      <p>Your input: {input}</p>
    </div>
  );
}

export default WeatherSearch;
