import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import CurrentDay from "./CurrentDay";
import CurrentTempDetails from "./CurrentTempDetails";
import Week from "./Week";
import ForecastBox from "./ForecastBox";
import SunriseSunsetTime from "./SunriseSunsetTime";
import Signature from "./Signature";
import TemperatureToggle from "./TemperatureToggle";
import LocationCountry from "./LocationCountry";
import LocationCity from "./LocationCity";
import axios from "axios";



export default function Wrapper() {
    //Temperature toggle 
    function callbackByTemperatureUnit(temperatureUnitFromToggle) {
        alert(temperatureUnitFromToggle);
        setTemperatureUnit(temperatureUnitFromToggle);
    }

    function callbackByForm(cityFromForm) {
        setCity(cityFromForm);
    }
    //WeatherData 
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState("Sydney");
    const [temperatureUnit, setTemperatureUnit] = useState(true);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            minTemperature: response.data.main.temp_min,
            maxTemperature: response.data.main.temp_max,
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].main,
        });
    }
    if (weatherData.ready) {
        return (
            <div className="container">
                <div className="wrapper" id="background-element">
                    <Form callback={callbackByForm} />
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <LocationCountry weatherData={weatherData} />
                        </div>
                        <div className="col-4 temperature-toggle">
                            <TemperatureToggle toggle={temperatureUnit} callback={callbackByTemperatureUnit} />
                        </div>
                    </div>
                    <LocationCity city={city} />
                    <CurrentDay />
                    <CurrentTempDetails weatherData={weatherData} />
                    <Week />
                    <ForecastBox />
                    <SunriseSunsetTime />
                    <Signature />
                </div>
            </div>
        );
    }
    else {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}