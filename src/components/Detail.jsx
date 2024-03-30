// 'use client';

const Detail = ({weatherData}) => {
    if (weatherData == null) return null;

    return (
        <div className="details-container border-2 border-red-700 container p-4 m-auto">
            <ul className="details-list">
                <li className="py-4 flex justify-between " id="1">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/thermal_sensation.svg" alt="Thermal Sensation" />
                        Thermal sensation
                    </span>
                    {weatherData.main.feels_like}°c 
                </li>
                <li className="py-4 flex justify-between " id="2">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/rain_probability.svg" alt="Probability of Rain" />
                        Probability of rain
                    </span>
                </li>
                <li className="py-4 flex justify-between " id="3">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/wind_speed.svg" alt="Wind Speed" />
                        Wind speed
                    </span>
                    {weatherData.wind.speed} km/h
                </li>
                <li className="py-4 flex justify-between " id="4">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/humidity.svg" alt="Air Humidity" />   
                        Air humidity
                    </span>
                    {weatherData.main.humidity}%
                </li>
                <li className="py-4 flex justify-between " id="5">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/uv.svg" alt="UV Index" />
                        UV index
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Detail