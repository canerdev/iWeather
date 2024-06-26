"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Detail from "./Detail";
import Today from "./Today";
import NextDays from "./NextDays";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [cities, setCities] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCities = async () => {
        try {
            const res = await axios.get('https://countriesnow.space/api/v0.1/countries');

            const citiesData = res.data.data.map((country) => country.cities).flat();
            setCities(citiesData);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchData = async (cityName) => {
        setIsLoading(true);
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=8ed40447b15d76adef66af3ef5e7ee1d`
            );
            setWeatherData(res.data);
            console.log("res data: ", res.data);
            setIsLoading(false);
        } catch (err) {
            if (err.response.status === 404) {
                const msg = cityName + " is not found!";
                toast.error(msg, { autoClose: 2000 });
            }
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(city);
        setCity(""); // Clear input field after submission
        setSubmitted(true);
    };

    useEffect(() => {
        fetchCities();
    }, []); // Only fetch data on initial render

    return (
        <>
            <div className={`flex flex-col items-center search-container text-light-gray mt-48 mx-auto pb-4 ${submitted ? 'submitted' : ''}`}>
                <p className="font-bold text-xl pb-1">
                    Welcome to <span className="text-blue">TypeWeather</span>
                </p>
                <p className="text-sm font-normal">Choose a location to see the weather forecast</p>
                <Form 
                    handleSubmit={handleSubmit} 
                    cities={cities} 
                    city={city} 
                    setCity={setCity} 
                    fetchData={fetchData} 
                    setSubmitted={setSubmitted}
                    isLoading={isLoading}>
                </Form>
            </div>

            <Today className={`${submitted ? 'container-visible' : ''}`} weatherData={weatherData}></Today>
            <Detail className={`${submitted ? 'container-visible' : ''}`} weatherData={weatherData}></Detail>
            <NextDays weatherData={weatherData}></NextDays>
            <ToastContainer />
        </>
    );
};

export default Weather;
