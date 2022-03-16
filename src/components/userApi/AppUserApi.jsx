import React from "react";
import classes from "./appUserApi.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const AppUserApi = () => {
    return (
        <div className={classes.userApi}>
            <div className={classes.userApiContainer}>
                <h1>User Api. take from github user</h1>
                <Link className="icon-gohome-link" to="/">
                    <div className="icon-gohome-container">
                        <HiOutlineHome className="icon-gohome-icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AppUserApi;
