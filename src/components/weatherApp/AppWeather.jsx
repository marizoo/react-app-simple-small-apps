import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./appWeather.module.css";

const AppWeather = () => {
    return (
        <div className={classes.appWeather}>
            <div className={classes.appWeatherContainer}>App weather</div>
            <Link className="icon-gohome-link" to="/">
                <div className="icon-gohome-container">
                    <HiOutlineHome className="icon-gohome-icon" />
                </div>
            </Link>
        </div>
    );
};

export default AppWeather;
