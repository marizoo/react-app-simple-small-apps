import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./appWeather.module.css";

const AppWeather = () => {
    const dayNumber = new Date().getDate();
    const year = new Date().getFullYear();
    const dayName = new Date().toLocaleString("default", { weekday: "long" });
    const monthName = new Date().toLocaleString("default", { month: "long" });

    return (
        <div className={classes.appWeather}>
            <div className={classes.appWeatherContainer}>
                {/* <div className={classes.dateContainer}>
                    <p>
                        {dayName},{dayNumber} {monthName} {year}
                    </p>
                </div> */}

                <div class={classes.calendar}>
                    <div class={classes.calendarBody}>
                        <span class={classes.monthName}>{monthName}</span>
                        <span class={classes.dayName}>{dayName}</span>
                        <span class={classes.dateNumber}>{dayNumber}</span>
                        <span class={classes.year}>{year}</span>
                    </div>
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
