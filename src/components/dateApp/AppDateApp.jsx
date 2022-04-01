import React, { useState, useEffect } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./appDateApp.module.css";

const AppDateApp = () => {
    const dayNumber = new Date().getDate();
    const year = new Date().getFullYear();
    const dayName = new Date().toLocaleString("default", { weekday: "long" });
    const monthName = new Date().toLocaleString("default", { month: "long" });

    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    // const seconds = today.getSeconds();

    const [period, setPeriod] = useState("AM");

    useEffect(() => {
        // Set the time period(AM/PM)
        if (hours >= 12) {
            setPeriod("PM");
        }
    }, []);

    return (
        <div className={classes.appDate}>
            <div className={classes.appDateContainer}>
                <div class={classes.calendar}>
                    <div class={classes.calendarBody}>
                        <span class={classes.monthName}>
                            {monthName}, {year}
                        </span>
                        <span class={classes.dayName}>{dayName}</span>
                        <span class={classes.dateNumber}>{dayNumber}</span>
                        <div className={classes.digital_clock}>
                            <div className={classes.time}>
                                <span className={classes.hour}>{hours}</span>
                                <span className={classes.dots}>:</span>
                                <span className={classes.minutes}>
                                    {minutes}
                                </span>
                                {/* <span className={classes.dots}>:</span> */}
                                {/* <span className={classes.seconds}>
                                    {seconds}
                                </span> */}
                                <div className={classes.right_side}>
                                    <span className={classes.period}>
                                        {period}
                                    </span>
                                </div>
                            </div>
                        </div>
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

export default AppDateApp;
