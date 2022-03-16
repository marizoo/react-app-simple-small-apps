import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./appSignIn.module.css";

const AppSignIn = () => {
    return (
        <div className={classes.appSignIn}>
            <div className={classes.appSignInContainer}>
                <h1>Sign In app</h1>
                <Link className="icon-gohome-link" to="/">
                    <div className="icon-gohome-container">
                        <HiOutlineHome className="icon-gohome-icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AppSignIn;
