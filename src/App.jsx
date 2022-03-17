import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AppAddUser from "./components/addUser/AppAddUser";
import Home from "./components/home/Home";
import AppShoppingList from "./components/shoppingList/AppShoppingList";
import AppSignIn from "./components/signIn/AppSignIn";
import Temperature from "./components/temperature/Temperature";
import AppUserApi from "./components/userApi/AppUserApi";
import AppWeather from "./components/weatherApp/AppWeather";

const AppSt = styled.div`
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
                <Route path="addUser" element={<AppAddUser />} />
                <Route path="signIn" element={<AppSignIn />} />
                <Route path="shopping" element={<AppShoppingList />} />
                <Route path="weather" element={<AppWeather />} />
                <Route path="userApi" element={<AppUserApi />} />
            </Routes>
        </AppSt>
    );
};

export default App;

// ! TODO
// - download react router dom
