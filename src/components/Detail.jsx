// 'use client';

const Detail = ({weatherData}) => {
    if (weatherData == null) return null;

    const weather = weatherData.list[0];
    const feels_like = weather.main.feels_like - 273.15;


    return (
        <div className="details-container container px-4 py-2 mb-2 m-auto">
            <ul className="details-list">
                <li className="py-4 flex justify-between " id="1">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/thermal_sensation.svg" alt="Thermal Sensation" />
                        Thermal sensation
                    </span>
                    {feels_like.toFixed()}°c 
                </li>
                <li className="py-4 flex justify-between " id="2">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/rain_probability.svg" alt="Probability of Rain" />
                        Probability of rain
                    </span>
                    {weather.pop}%
                </li>
                <li className="py-4 flex justify-between " id="3">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/wind_speed.svg" alt="Wind Speed" />
                        Wind speed
                    </span>
                    {weather.wind.speed} km/h
                </li>
                <li className="py-4 flex justify-between " id="4">
                    <span>
                        <img className="inline-block mr-3" width={24} height={24} src="/assets/humidity.svg" alt="Air Humidity" />   
                        Air humidity
                    </span>
                    {weather.main.humidity}%
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