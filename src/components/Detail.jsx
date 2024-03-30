// 'use client';

const Detail = ({weatherData}) => {
    if (weatherData == null) return null;

    return (
        <ul>
            <li className="border-2 border-white" id="1">
                <img src="/assets/thermal_sensation.svg" alt="Thermal Sensation" />
                Thermal sensation -- {weatherData.main.feels_like}°c 
            </li>
            <li className="border-2 border-white" id="2">
                <img src="/assets/rain_probability.svg" alt="Probability of Rain" />
                Probability of rain
            </li>
            <li className="border-2 border-white" id="3">
                <img src="/assets/wind_speed.svg" alt="Wind Speed" />
                Wind speed -- {weatherData.wind.speed} km/h
            </li>
            <li className="border-2 border-white" id="4">
                <img src="/assets/humidity.svg" alt="Air Humidity" />
                Air humidity -- {weatherData.main.humidity}%
            </li>
            <li className="border-2 border-white" id="5">
                <img src="/assets/uv.svg" alt="UV Index" />
                UV index
            </li>
        </ul>
    )
}

export default Detail