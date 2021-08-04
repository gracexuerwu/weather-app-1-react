import React from "react";
import "./App.css";
import Sunrise from "./images/sunrise.png";
import Sunset from "./images/sunset.png";

export default function SunriseSunsetTime() {
    return (
        <div className="SunriseSunsetTime">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={Sunrise} alt="Sunrise" width="35" />
                        <div className="sunriseTime">sunrise 06:46</div>
                    </div>
                    <div className="col">
                        <hr />
                    </div>
                    <div className="col">
                        <img src={Sunset} alt="Sunset" width="35" />
                        <div className="sunsetTime">sunrise 06:46</div>
                    </div>
                </div>
            </div>
        </div>
    );
}