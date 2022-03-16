import React from "react";
import classes from "./addUserButton.module.css";

const AddUserButton = (props) => {
    return (
        <button
            className={classes.addUserBtn}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default AddUserButton;
