import React from "react";
import AddUserButton from "../appAddUserUI/AddUserButton";
import AddUserCard from "../appAddUserUI/AddUserCard";
import classes from "./errorModal.module.css";
import ReactDOM from "react-dom";

// create "Backdrop" component.
const Backdrop = (props) => {
    return (
        <div
            onClick={props.onCloseErrorModal}
            className={classes.errorModalBackdrop}
        ></div>
    );
};

// create "ModalOverlay" component.
const ModalOverlay = (props) => {
    return (
        // <AddUserCard className={classes.errorModalModal}>
        <div className={classes.errorModalModal}>
            <header className={classes.errorModalHeader}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.errorModalContent}>
                <p className={classes.errorModalContentMsg}>{props.message}</p>
            </div>
            <footer className={classes.errorModalFooter}>
                <AddUserButton onClick={props.onCloseErrorModal}>
                    Okay
                </AddUserButton>
            </footer>
        </div>
    );
};

// step 3. go to "index.html" to add "divs". on top of the "root's div"
//  like this:
//<div id="backdrop-root"></div>
// <div id="overlay-root"></div>
// <div id="root"></div>

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onCloseErrorModal={props.onCloseErrorModal} />,
                document.getElementById("backdrop-root")
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    onCloseErrorModal={props.onCloseErrorModal}
                    title={props.title}
                    message={props.message}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;
