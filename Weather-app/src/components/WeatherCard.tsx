function WeatherCard(props) {
    
    return (
        <div className="weather-card-container">
            <div className="top-section">
                <div>{props.data.weather[0].main}</div>
            </div>

            <div className="bottom-section">
                <div className="current-temp-container">
                    <div> Current temp: {props.data.main.temp} °C </div>
                </div>
                <div className="min-max-temp-container">
                    <div>Min temp: {props.data.main.temp_min} °C</div>
                    <div>Max temp: {props.data.main.temp_max} °C</div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
