import React from "react";
import styled from "styled-components";
import Hero from "./components/hero/Hero";
import Temperature from "./components/temperature/Temperature";

const AppSt = styled.div`
    /* min-height: 100vh; */
    background: #1d1d1d;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <AppSt>
            <Hero />
            <Temperature />
        </AppSt>
    );
};

export default App;

// ! TODO
// - download react router dom
