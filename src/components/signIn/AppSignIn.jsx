import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./appSignIn.module.css";
import SignInWelcomePage from "./appSignInComponent/SignInWelcomePage";

// link to this
//  signInWelcome

const AppSignIn = () => {
    // 01. a1/x. To capture all data
    // const [datas, setDatas] = useState({
    //     emailInput: "",
    //     passwordInput: "",
    // });

    // 02. a1/3. To capture email and password input
    const [loginDatas, setLoginDatas] = useState({
        emailInput: "",
        passwordInput: "",
    });

    // 03. a1/1. State to navigate to welcome page
    const [correctLogin, setCorrectLogin] = useState(false);

    // 04. a1/1. State to show/hide Error message
    const [errorMessage, setErrorMessage] = useState(false);

    // 02. a2/3. To handle input value of email and password
    const handleInputs = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const copyLoginDatas = { ...loginDatas };

        copyLoginDatas[fieldName] = fieldValue;
        setLoginDatas(copyLoginDatas);
    };

    // 02. a3/3. To handle login's form submission.
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

    // 04. a1.1 handle logout button
    const handleLogOut = () => {
        setCorrectLogin(false);
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
