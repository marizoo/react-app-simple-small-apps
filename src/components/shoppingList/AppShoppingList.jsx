import React from "react";
import { Link } from "react-router-dom";
import classes from "./appShopping.module.css";
import { HiOutlineHome } from "react-icons/hi";

const AppShoppingList = () => {
    return (
        <div className={classes.appShopping}>
            <div className={classes.appShoppingContainer}>
                <h1>AppShoppingList</h1>
                <Link className="icon-gohome-link" to="/">
                    <div className="icon-gohome-container">
                        <HiOutlineHome className="icon-gohome-icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AppShoppingList;
