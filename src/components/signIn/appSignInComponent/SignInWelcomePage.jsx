import React from "react";
import cm from "./signInWelcomePage.module.css";

const SignInWelcomePage = ({ onHandleLogOut, userName }) => {
    return (
        <div className={cm.signInWelcome}>
            <div className={cm.signInWelcomeContainer}>
                <h1>Welcome!</h1>
                <button
                    className={cm.signInWelcomebutton}
                    onClick={onHandleLogOut}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default SignInWelcomePage;
