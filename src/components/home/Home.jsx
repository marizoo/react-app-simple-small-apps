import React from "react";
import { Link } from "react-router-dom";
import "./homeStyle.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1 className="home-title">6 Simple React Apps</h1>

                <div className="button-container">
                    <button className="home-button home-list">
                        <Link className="home-list-link" to="/temperature">
                            Temperature Display
                        </Link>
                    </button>
                    <button className="home-button home-list">
                        <Link className="home-list-link" to="/addUser">
                            Add Users App
                        </Link>
                    </button>
                    <button className="home-button home-list">
                        <Link className="home-list-link" to="/signIn">
                            Sign in form
                        </Link>
                    </button>
                    <button className="home-button home-list">
                        <Link className="home-list-link" to="/shopping">
                            Shopping List
                        </Link>
                    </button>
                    <button className="home-button home-list">
                        <Link className="home-list-link" to="/weather">
                            Weather App (api)
                        </Link>
                    </button>
                    <button className="home-button home-list">
                        <Link className="home-list-link" to="/userApi">
                            User App (api)
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
