const Today = ({ weatherData }) => {
    if (!weatherData) return null; 

    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', {weekday: 'long'});
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear(); 

    const weather = weatherData.weather[0];

    return (
        <div className="container today-cart-container m-auto mb-2">
            <div className="today-cart">
                <div className="location-date">
                    <p>{weatherData.name}, {weatherData.sys.country}</p>
                    <p>{dayOfWeek}, {month} {dayOfMonth}, {year}</p> 
                </div>
                <div className="weather-summary">
                    <p>{weatherData.main.temp}°c</p>
                    <p>{weatherData.main.temp_min}°c / {weatherData.main.temp_max}°c</p>
                    <p>{weather.main}</p>
                </div>
            </div>
        </div>
    );
}

export default Today;
