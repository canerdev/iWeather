const Today = ({ weatherData }) => {
    if (!weatherData) return null;

    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const weather = weatherData.list[0];
    const temp = (weather.main.temp - 273.15).toFixed();
    const min_temp = (weather.main.temp_min - 273.15).toFixed();
    const max_temp = (weather.main.temp_max - 273.15).toFixed();

    return (
        <div className="container today-cart-container m-auto mb-2 p-3">
            <div className="rounded-lg today-cart p-5">
                <div className="location-date">
                    <p className="text-base font-bold">{weatherData.city.name}, {weatherData.city.country}</p>
                    <p className="text-xs font-normal">{dayOfWeek}, {month} {dayOfMonth}, {year}</p>
                </div>
                <div className="weather-summary">
                    <p className="text-5xl font-extrabold mb-2">
                        {temp}°c
                    </p>
                    <p className="font-bold text-base">{min_temp}°c / {max_temp}°c</p>
                    <p className="text-sm font-normal">{weather.weather[0].main}</p>
                </div>
            </div>
        </div>
    );
}

export default Today;
