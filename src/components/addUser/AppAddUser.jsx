import React, { useState } from "react";
import classes from "./appAddUser.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import AddUser from "./appAddUserComponent/AddUser";
import ShowUser from "./appAddUserComponent/ShowUser";
import ErrorModal from "./appAddUserComponent/ErrorModal";

const AppAddUser = () => {
    // 00. a1/1 State to keep All users data
    const [allUsersData, setAllUsersData] = useState([]);

    // 01. a1/3 State to bind data with "AddUser's input"
    const [addUserData, setAddUserData] = useState({
        userName: "",
        userAge: "",
    });

    // 03.a1/4 State for "ErrorModal"
    //  Add this state inside (01. a3/3 Handle "AddUser's form submission")
    const [error, setError] = useState();

    // 01. a2/3 Handle "AddUser's onChange prop in the input element"
    const handleAddUserData = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newUserData = { ...addUserData };

        newUserData[fieldName] = fieldValue;

        setAddUserData(newUserData);
    };

    // 01. a3/3 Handle "AddUser's form submission"
    const handleAddUserSubmit = (ev) => {
        ev.preventDefault();

        // 03.a2/4 validation check, if input is empty then return.

        if (
            addUserData.userName.trim() === 0 ||
            addUserData.userAge.trim() === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age",
            });
            return;
        }

        // 03.a3/4 validation check, make a range for the age.
        //  the "plus sign" is a "force" conversion of the input to a number. because the default input is a "string", even though the type="number"
        if (addUserData.userAge < 1 || addUserData.userAge > 100) {
            setError({
                title: "Invalid Age",
                message: "Valid age is from 1 - 99",
            });
            return;
        }

        const newUser = {
            userName: addUserData.userName,
            userAge: addUserData.userAge,
        };

        const copyAllUsersData = [...allUsersData, newUser];

        setAllUsersData(copyAllUsersData);
        setAddUserData({
            userName: "",
            userAge: "",
        });
    };

    // 03.a4/4 Function to close the Error Modal
    // f.y.i: "null" is treated as a faulty value, so it won't be rendered.
    const closeErrorModal = () => {
        setError(null);
    };

    return (
        <div className={classes.appAddUser}>
            {error && (
                <ErrorModal
                    onCloseErrorModal={closeErrorModal}
                    title={error.title}
                    message={error.message}
                />
            )}
            <div className={classes.appAddUserContainer}>
                <h1 className={classes.appAddUserTitle}>Add User App</h1>
                <AddUser
                    onAddUserData={addUserData}
                    onHandleAddUserData={handleAddUserData}
                    onHandleAddUserSubmit={handleAddUserSubmit}
                />
                <ShowUser allUsersData={allUsersData} />

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

// ! TODO
//  - pop up on error modal, error in styling!!!
