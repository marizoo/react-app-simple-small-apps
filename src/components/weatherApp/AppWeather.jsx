import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import cm from "./appWeather.module.css";

const api = {
    key: "6aa05eeba9177c5808f11525cdef733c",
    base: "https://api.openweathermap.org/data/2.5/",
};

const AppWeather = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = (ev) => {
        if (ev.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setWeather(result);
                    setQuery("");
                    console.log(result);
                });
        }
    };

    const dateBuilder = (d) => {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div className={cm.appWeather}>
            <div className={cm.appWeatherContainer}>
                {/* <div
                    className={`(${typeof weather.main} != 'undefined') 
                ? ((${weather.main.temp} > 16) ? ${cm.appWeatherCard_warm} : ${
                        cm.appWeatherCard_cold
                    })
                : ${cm.appWeatherCard})
              `}
                > */}
                <div className={cm.appWeatherCard}>
                    <div className={cm.appWeatherCard_input}>
                        <input
                            type="text"
                            className={cm.appWeatherCard_input_input}
                            placeholder="Search..."
                            value={query}
                            onChange={(ev) => setQuery(ev.target.value)}
                            onKeyPress={search}
                        />
                    </div>
                    {typeof weather.main != "undefined" && (
                        <>
                            <div className={cm.appWeatherCard_location}>
                                <h3 className={cm.appWeatherCard_location_city}>
                                    {weather.name}, {weather.sys.country}
                                </h3>
                                <h3
                                    className={cm.appWeatherCard_location_dates}
                                >
                                    {dateBuilder(new Date())}
                                </h3>
                            </div>
                            <div className={cm.appWeatherCard_temperature}>
                                <p
                                    className={
                                        cm.appWeatherCard_temperature_text
                                    }
                                >
                                    {Math.round(weather.main.temp)}&deg;c
                                </p>
                            </div>
                            <div className={cm.appWeatherCard_desc}>
                                <p className={cm.appWeatherCard_desc_p}>
                                    {weather.weather[0].main}
                                </p>
                            </div>
                        </>
                    )}

                    {typeof weather.main == "undefined" && (
                        <div className={cm.appWeatherCard_noResult}>
                            Sorry... <br /> no result.
                        </div>
                    )}
                </div>
            </div>
            <Link className="icon-gohome-link" to="/">
                <div className="icon-gohome-container">
                    <HiOutlineHome className="icon-gohome-icon" />
                </div>
            </Link>
        </div>
    );
};

export default AppWeather;
