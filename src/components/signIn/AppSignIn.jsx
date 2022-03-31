import React, { useState, useEffect } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./appSignIn.module.css";
import SignInWelcomePage from "./appSignInComponent/SignInWelcomePage";

const AppSignIn = () => {
    // 01. a1/3. To capture email and password input
    const [loginDatas, setLoginDatas] = useState({
        emailInput: "",
        passwordInput: "",
    });

    // 02. a1/1. State to navigate to welcome page
    const [correctLogin, setCorrectLogin] = useState(false);

    //05. a2/3. check the value of the key: isAppSignInLoggedIn.
    useEffect(() => {
        const storedAppSignInIsLoggedIn = localStorage.getItem(
            "isAppSignInLoggedIn"
        );

        if (storedAppSignInIsLoggedIn === "1") {
            setCorrectLogin(true);
        }
    }, []);

    // 04. a1/1. State to show/hide Error message
    const [errorMessage, setErrorMessage] = useState(false);

    // 01. a2/3. To handle input value of email and password
    const handleInputs = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const copyLoginDatas = { ...loginDatas };

        copyLoginDatas[fieldName] = fieldValue;
        setLoginDatas(copyLoginDatas);
    };

    // 01. a3/3. To handle login's form submission.
    const handleLogin = (ev) => {
        ev.preventDefault();

        const newLoginDatas = {
            emailInput: loginDatas.emailInput,
            passwordInput: loginDatas.passwordInput,
        };

        setLoginDatas(newLoginDatas);

        if (
            loginDatas.emailInput === "admin@admin.com" &&
            loginDatas.passwordInput === "admin123"
        ) {
            setCorrectLogin(true);
            setLoginDatas({
                emailInput: "",
                passwordInput: "",
            });

            //05. a1/3. save correct input in local storage
            //  key: isAppSignInLoggedIn. value: 1. 1 means logged in. 0 means logged out.
            localStorage.setItem("isAppSignInLoggedIn", "1");
        } else {
            setErrorMessage(true);

            setLoginDatas({
                emailInput: "",
                passwordInput: "",
            });

            setTimeout(() => {
                setErrorMessage(false);
            }, 2500);
        }
    };

    // 03. a1.1 handle logout button
    const handleLogOut = () => {
        setCorrectLogin(false);

        //05. a3/3. set the value of the key: isAppSignInLoggedIn to '0'. so login won't persist.
        localStorage.setItem("isAppSignInLoggedIn", "0");
    };

    return (
        <div className={classes.appSignIn}>
            <div className={classes.appSignInContainer}>
                {!correctLogin && (
                    <>
                        <h1 className={classes.appSignInTitle}>Sign In</h1>
                        <form
                            onSubmit={handleLogin}
                            className={classes.appSignInCard}
                        >
                            {errorMessage && (
                                <div
                                    className={
                                        classes.appSignInErrorMsgContainer
                                    }
                                >
                                    <p>Sorry, wrong email & password</p>
                                </div>
                            )}

                            <div className={classes.appSignInEmailCont}>
                                <label htmlFor="email">Email</label>
                                <input
                                    className={classes.appSignInInput}
                                    type="email"
                                    name="emailInput"
                                    value={loginDatas.emailInput}
                                    onChange={handleInputs}
                                    required
                                />
                            </div>
                            <div className={classes.appSignInPasswordCont}>
                                <label htmlFor="password">Password</label>
                                <input
                                    className={classes.appSignInInput}
                                    type="password"
                                    name="passwordInput"
                                    value={loginDatas.passwordInput}
                                    onChange={handleInputs}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={classes.appSignInButton}
                            >
                                Login
                            </button>
                        </form>
                        <Link className="icon-gohome-link" to="/">
                            <div className="icon-gohome-container">
                                <HiOutlineHome className="icon-gohome-icon" />
                            </div>
                        </Link>
                    </>
                )}
                {correctLogin && (
                    <SignInWelcomePage onHandleLogOut={handleLogOut} />
                )}
            </div>
        </div>
    );
};

export default AppSignIn;
