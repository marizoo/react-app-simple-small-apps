import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/home/Home";
import Temperature from "./components/temperature/Temperature";

const AppSt = styled.div`
    /* min-height: 100vh; */
    /* background: #1d1d1d;
    color: white; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <AppSt>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="temperature" element={<Temperature />} />
            </Routes>
        </AppSt>
    );
};

export default App;

// ! TODO
// - download react router dom
