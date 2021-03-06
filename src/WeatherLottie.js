import React from "react";
import "./App.css";
import Lottie from 'lottie-react';
import cloudy from "./animation/cloudy.json";
import fog from "./animation/fog.json";
import haze from "./animation/haze.json";
import lightSnow from "./animation/lightSnow.json";
import night from "./animation/night.json";
import rainy from "./animation/rainy.json";
import stormy from "./animation/stormy.json";
import sun from "./animation/sun.json";


export default function WeatherLottie(props) {
  // const codeMapping = {
  //   "01d": "CLEAR_DAY",
  //   "01n": "CLEAR_NIGHT",
  //   "02d": "PARTLY_CLOUDY_DAY",
  //   "02n": "PARTLY_CLOUDY_NIGHT",
  //   "03d": "PARTLY_CLOUDY_DAY",
  //   "03n": "PARTLY_CLOUDY_NIGHT",
  //   "04d": "CLOUDY",
  //   "04n": "CLOUDY",
  //   "09d": "RAIN",
  //   "09n": "RAIN",
  //   "010d": "RAIN",
  //   "010n": "RAIN",
  //   "011d": "CLEAR_DAY",
  //   "011n": "CLEAR_NIGHT",
  //   "013d": "SNOW",
  //   "013n": "SNOW",
  //   "050d": "FOG",
  //   "050n": "FOG",
  // };
  let weatherIcon;
  if (props.code === "01d") {
    weatherIcon = sun;
  }
  else if (props.code === "01n") {
    weatherIcon = night;
  }
  else if (props.code === "02d") {
    weatherIcon = cloudy;
  }
  else if (props.code === "02n") {
    weatherIcon = night;
  }
  else if (props.code === "03d" || props.code === "03n" || props.code === "04d" || props.code === "04n") {
    weatherIcon = cloudy;
  }
  else if (props.code === "09d" || props.code === "09n") {
    weatherIcon = rainy;
  }
  else if (props.code === "10d" || props.code === "10n") {
    weatherIcon = rainy;
  }
  else if (props.code === "11d" || props.code === "11n") {
    weatherIcon = stormy;
  }
  else if (props.code === "13d" || props.code === "13n") {
    weatherIcon = lightSnow;
  }
  else if (props.code === "50d") {
    weatherIcon = haze;
  }
  else if (props.code === "50n") {
    weatherIcon = fog;
  }
  else {
    alert(`Can't find any match for this weather code ${props.code}!`)
    weatherIcon = sun;
  }
  return (
    <Lottie animationData={weatherIcon} />
  );
}

