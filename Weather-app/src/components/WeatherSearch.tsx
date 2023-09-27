import { ChangeEvent, useState } from "react";

function WeatherSearch() {

  const [input, setInput] = useState('');
  const [weather,setWeather] = useState();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

const fetchData = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=2&appid=c6bb3ac90e06b38201400c242a9404c2`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        setWeather(data);
    })

    console.log(weather);
}

  return (
    <div className="main-container">
      <input
        className="search-field"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="search-button" onClick={fetchData}>Search</button>
      <p>Your input: {input}</p>
    </div>
  );
}

export default WeatherSearch;
