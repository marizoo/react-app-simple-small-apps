import React from "react";
import AddUserButton from "../appAddUserUI/AddUserButton";
import classes from "./addUser.module.css";

const AddUser = ({
    onHandleAddUserSubmit,
    onHandleAddUserData,
    onAddUserData,
}) => {
    return (
        <div className={classes.addUser}>
            <div className={classes.addUserContainer}>
                <form
                    className={classes.addUserForm}
                    onSubmit={onHandleAddUserSubmit}
                >
                    <label className={classes.addUserLabel} htmlFor="name">
                        Enter name:
                    </label>
                    <input
                        name="userName"
                        className={classes.addUserInput}
                        type="text"
                        placeholder="Bob Marley..."
                        onChange={onHandleAddUserData}
                        value={onAddUserData.userName}
                    />
                    <label className={classes.addUserLabel} htmlFor="age">
                        Enter age:
                    </label>
                    <input
                        name="userAge"
                        className={classes.addUserInput}
                        type="number"
                        placeholder="47..."
                        onChange={onHandleAddUserData}
                        value={onAddUserData.userAge}
                    />
                    <AddUserButton type="submit">Add User</AddUserButton>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
