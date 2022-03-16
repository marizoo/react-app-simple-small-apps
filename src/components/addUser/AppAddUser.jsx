import React from "react";
import classes from "./appAddUser.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const AppAddUser = () => {
    return (
        <div className={classes.appAddUser}>
            <div className={classes.appAddUserContainer}>
                <h1>add app container</h1>
                <Link className="icon-gohome-link" to="/">
                    <div className="icon-gohome-container">
                        <HiOutlineHome className="icon-gohome-icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AppAddUser;
