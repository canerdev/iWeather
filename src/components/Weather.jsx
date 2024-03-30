"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Detail from "./Detail";
import Today from "./Today";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
  
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8ed40447b15d76adef66af3ef5e7ee1d`
        );
        setWeatherData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
      setCity(""); // Clear input field after submission
    };
  
    useEffect(() => {
      fetchData();
    }, []); // Only fetch data on initial render
    
    console.log(weatherData);
    

    return (
      <>
        <div className="flex flex-col items-center  search-container mt-48 ml-auto mr-auto">
          <p>
            Welcome to <span className="text-blue">TypeWeather</span>
          </p>
          <p className="text-sm">Choose a location to see the weather forecast</p>
          <Form handleSubmit={handleSubmit} city={city} setCity={setCity}></Form>
          <p>city name: {city}</p>
        </div>
        
        <Today weatherData={weatherData}></Today>
        <Detail weatherData={weatherData}></Detail>
      </>
    );
  };

  export default Weather;
  