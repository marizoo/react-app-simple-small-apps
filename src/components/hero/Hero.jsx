import React from "react";
import "./heroStyle.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1 className="hero-title">6 Simple React Apps</h1>
                <button className="button hero-list">
                    Temperature Display
                </button>
                <button className="button hero-list">Sign in form</button>
                <button className="button hero-list">Shopping list</button>
            </div>
        </div>
    );
};

export default Hero;
