import { useState, useEffect } from "react";

const SuggestedCities = ({ city, cities, setCity, fetchData }) => {
    const [filteredCities, setFilteredCities] = useState([]);

    const filterCities = (city) => {
        if (city == null || cities == null) return [];

        const res = cities.filter((c) => c.toLocaleLowerCase('tr-TR').startsWith(city.toLocaleLowerCase('tr-TR'))).slice(0, 3);

        setFilteredCities(res);
    }

    useEffect(() => {
        filterCities(city);
    }, [city]);

    useEffect(() => {
        fetchData();
    }, [])

    console.log(filteredCities);

    const handleClick = (clickedCity) => {
        setCity(clickedCity);
        console.log(clickedCity);
        setFilteredCities([]);
    }

    return (
        filteredCities.length > 0 && (
            <ul id="autocomplete-list" className={`filtered-cities-list rounded mt-2 ${!city ? 'hidden' : ''}`} role="listbox">
                {filteredCities.map((city) => (
                    <li
                        key={city}
                        onClick={() => handleClick(city)}
                        className="py-4 px-5 rounded"
                        role="option"
                    >
                        {city}
                    </li>
                ))}
            </ul>
        )
    );
}

export default SuggestedCities