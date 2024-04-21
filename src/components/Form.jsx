// Form.js
'use client';

import React, { useState, useEffect } from "react";

const Form = ({ city, setCity, fetchData, handleSubmit, cities, setSubmitted }) => {
    const [filteredCities, setFilteredCities] = useState([]);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e); // Call handleSubmit on Enter key press
        }
    };

    const handleClick = (clickedCity) => {
        fetchData(clickedCity);
        setCity('');
        setSubmitted(true);
    }

    useEffect(() => {
        if (cities != null) {
            const filtered = cities.filter((c) => c.toLowerCase().startsWith(city.toLowerCase())).slice(0, 3);
            setFilteredCities(filtered);
        }
    }, [city])

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{
                    backgroundColor: "#1E1E29",
                    color: "#FAFAFA",
                    borderRadius: "0.375rem",
                    border: "none",
                    width: "359px",
                }}
                className="px-5 py-4"
                type="text"
                placeholder="Search location"
                value={city}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                aria-autocomplete="list"
                aria-controls="autocomplete-list"
            />
            {filteredCities.length > 0 && (
                <ul id="autocomplete-list" className={`filtered-cities-list rounded mt-2 ${!city ? 'hidden' : ''}`} role="listbox">
                    {filteredCities.map((it) => (
                        <li
                            key={it}
                            onClick={() => handleClick(it)}
                            className="py-4 px-5 rounded"
                            role="option"
                        >
                            {it}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default Form;
