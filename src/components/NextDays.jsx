const NextDays = ({weatherData}) => {
    if (weatherData === null) {
        console.log("weatherdata list is null");
        return;
    }
    
    const dataList = weatherData.list;
    
    // next five days
    const d1 = dataList[0];
    const d2 = dataList[8];
    const d3 = dataList[16];
    const d4 = dataList[24];
    const d5 = dataList[32];

    // day names
    const today = new Date();
    const nextFiveDays = [];
    for (let i = 0; i < 5; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][nextDay.getDay()];
        nextFiveDays.push(dayName);
    }

    // icons
    const weatherIcons = {
        '01d': '/assets/clear-day.svg',
        '02d': '/assets/clear-night.svg',
        '01n': '/assets/cloudy-day.svg',
        '02n': '/assets/cloudy-night.svg',
        '04d': '/assets/broken-clouds-day.svg',
        '03n': '/assets/broken-clouds-night.svg',
        '03d': '/assets/rain-day.svg',
        '03n': '/assets/rain-night.svg',
        '05d': '/assets/storm-day.svg',
        '05n': '/assets/storm-nigth.svg',
        '10d': '/assets/rain-night.svg',
    }

    return (
        <div className="container mx-auto flex p-3 mb-2">
            <div className="w-1/5 flex-col text-center gap-1">
                <span className="text-light-gray text-sm font-bold">{nextFiveDays[0]}</span>
                <img className="mx-auto" width={56} height={56} src={weatherIcons[d1.weather[0].icon]} alt={d1.weather[0].main}/>
                <span>
                    {(d1.main.temp_max - 273.15).toFixed()}°c
                </span> <br />
                <span className="text-gray-400">
                    {(d1.main.temp_min - 273.15).toFixed()}°c
                </span>
            </div>
            <div className="w-1/5 flex-col text-center gap-1">
                <span className="text-light-gray text-sm font-bold">{nextFiveDays[1]}</span>
                <img className="mx-auto" width={56} height={56} src={weatherIcons[d2.weather[0].icon]} alt={d2.weather[0].main} />
                <span>
                    {(d2.main.temp_max - 273.15).toFixed()}°c
                </span> <br />
                <span className="text-gray-400">
                    {(d2.main.temp_min - 273.15).toFixed()}°c
                </span>
            </div>
            <div className="w-1/5 flex-col text-center gap-1">
                <span className="text-light-gray text-sm font-bold">{nextFiveDays[2]}</span>
                <img className="mx-auto" width={56} height={56} src={weatherIcons[d3.weather[0].icon]} alt={d3.weather[0].main} />
                <span>
                    {(d3.main.temp_max - 273.15).toFixed()}°c
                </span> <br />
                <span className="text-gray-400">
                    {(d3.main.temp_min - 273.15).toFixed()}°c
                </span>
            </div>
            <div className="w-1/5 flex-col text-center gap-1">
                <span className="text-light-gray text-sm font-bold">{nextFiveDays[3]}</span>
                <img className="mx-auto" width={56} height={56} src={weatherIcons[d4.weather[0].icon]} alt={d4.weather[0].main} />
                <span>
                    {(d4.main.temp_max - 273.15).toFixed()}°c
                </span> <br />
                <span className="text-gray-400">
                    {(d4.main.temp_min - 273.15).toFixed()}°c
                </span>
            </div>
            <div className="w-1/5 flex-col text-center gap-1">
                <span className="text-light-gray text-sm font-bold">{nextFiveDays[4]}</span>
                <img className="mx-auto" width={56} height={56} src={weatherIcons[d5.weather[0].icon]} alt={d5.weather[0].main} />
                <span>
                    {(d5.main.temp_max - 273.15).toFixed()}°c
                </span> <br />
                <span className="text-gray-400">
                    {(d5.main.temp_min - 273.15).toFixed()}°c
                </span>
            </div>
        </div>
    )
}

export default NextDays;