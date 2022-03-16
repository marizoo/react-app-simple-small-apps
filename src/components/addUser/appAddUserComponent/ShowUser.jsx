import React from "react";
import AddUserCard from "../appAddUserUI/AddUserCard";
import classes from "./showUser.module.css";

const ShowUser = ({ allUsersData }) => {
    return (
        <div className={classes.showUser}>
            {allUsersData.map((data) => (
                <AddUserCard key={data.userName}>
                    <p>Name: {data.userName}</p>
                    <p>Age: {data.userAge}</p>
                </AddUserCard>
            ))}
        </div>
    );
};

export default ShowUser;
