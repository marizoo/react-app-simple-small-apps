import React from "react";
import classes from "./addUserCard.module.css";

const AddUserCard = (props) => {
    return (
        <div className={`${classes.addUserCard} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default AddUserCard;
