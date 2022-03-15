import React, { useState } from "react";
import "./temperatureStyle.css";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const Temperature = () => {
    const [temperature, setTemperature] = useState("27");
    const [cold, setCold] = useState(false);

    const handleMinus = () => {
        const newTempValue = temperature - 1;
        if (temperature < 17) return;
        if (temperature < 27) {
            setCold(true);
        }

        setTemperature(newTempValue);
    };

    const handlePlus = () => {
        setTemperature(temperature + 1);
        if (temperature > 31) return;
        if (temperature > 27) {
            setCold(false);
        }
    };

    return (
        <div className="temperature">
            <div className="temperature-container">
                <div className="temp__card">
                    <div className="temp__card__top">
                        <div
                            className={
                                cold === true
                                    ? "temp__card__top-display cold"
                                    : "temp__card__top-display hot"
                            }
                        >
                            {temperature}&deg;c
                        </div>
                    </div>

                    <div className="temp__card__bottom">
                        <div
                            className="temp__card__bottom-btn-minus"
                            onClick={handleMinus}
                        >
                            -
                        </div>
                        <div
                            className="temp__card__bottom-btn-plus"
                            onClick={handlePlus}
                        >
                            +
                        </div>
                    </div>
                </div>
                <Link className="icon-gohome-link" to="/">
                    <div className="icon-gohome-container">
                        <HiOutlineHome className="icon-gohome-icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Temperature;
