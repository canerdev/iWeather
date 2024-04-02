"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Detail from "./Detail";
import Today from "./Today";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const fetchData = async () => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8ed40447b15d76adef66af3ef5e7ee1d`
            );

            console.log(res);
            setWeatherData(res.data);
        } catch (err) {
            if (err.response.status === 404) {
                const msg = city + " is not found!";
                toast.error(msg, { autoClose: 2000 });
            }
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
        setCity(""); // Clear input field after submission
        setSubmitted(true);
    };

    useEffect(() => {
        fetchData();
    }, []); // Only fetch data on initial render

    // console.log(weatherData);    


    return (
        <>
            <div className={`flex flex-col items-center search-container mt-48 mx-auto pb-4 ${submitted ? 'submitted' : ''}`}>
                <p className="font-bold text-xl pb-1">
                    Welcome to <span className="text-blue">TypeWeather</span>
                </p>
                <p className="text-sm font-normal">Choose a location to see the weather forecast</p>
                <Form handleSubmit={handleSubmit} city={city} setCity={setCity}></Form>
            </div>

            <Today className={`${submitted ? 'container-visible' : ''}`} weatherData={weatherData}></Today>
            <Detail className={`${submitted ? 'container-visible' : ''}`} weatherData={weatherData}></Detail>
            <ToastContainer />
        </>
    );
};

export default Weather;
