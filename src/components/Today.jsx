const Today = ({ weatherData }) => {
    if (!weatherData) return null; 

    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', {weekday: 'long'});
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear(); 

    const weather = weatherData.weather[0];

    return (
        <div className="container today-cart-container m-auto mb-2 p-3">
            <div className="rounded-lg today-cart p-5">
                <div className="location-date">
                    <p className="text-base font-bold">{weatherData.name}, {weatherData.sys.country}</p>
                    <p className="text-xs font-normal">{dayOfWeek}, {month} {dayOfMonth}, {year}</p> 
                </div>
                <div className="weather-summary">
                    <p className="text-5xl font-extrabold mb-2">{weatherData.main.temp.toFixed(1)}°c</p>
                    <p className="font-bold text-base">{weatherData.main.temp_min}°c / {weatherData.main.temp_max}°c</p>
                    <p className="text-sm font-normal">{weather.main}</p>
                </div>
            </div>
        </div>
    );
}

export default Today;
