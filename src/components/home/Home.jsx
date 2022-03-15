import React from "react";
import { Link } from "react-router-dom";
import "./homeStyle.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1 className="home-title">6 Simple React Apps</h1>
                <button className="home-button home-list">
                    <Link className="home-list-link" to="/temperature">
                        Temperature Display
                    </Link>
                </button>
                <button className="home-button home-list">Sign in form</button>
                <button className="home-button home-list">Shopping list</button>
            </div>
        </div>
    );
};

export default Home;
