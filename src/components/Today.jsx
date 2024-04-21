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

    // icons
    const todayIcons = {
        '01d': '/assets/clear-day-bg.svg',
        '02d': '/assets/clear-night-bg.svg',
        '01n': '/assets/cloudy-day-bg.svg',
        '02n': '/assets/cloudy-night-bg.svg',
        '03d': '/assets/few-clouds-day-bg.svg',
        '03n': '/assets/few-clouds-night-bg.svg',
        '04d': '/assets/rain-day-bg.svg',
        '04n': '/assets/rain-night-bg.svg',
        '05d': '/assets/storm-day-bg.svg',
        '05n': '/assets/storm-nigth-bg.svg',
        '10d': '/assets/rain-night-bg.svg',
    }

    return (
        <div className="container today-cart-container m-auto mb-2 p-3">
            <div className="rounded-lg today-cart p-5" style={{ backgroundImage: `url(${todayIcons[weather.weather[0].icon]})` }}>
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
