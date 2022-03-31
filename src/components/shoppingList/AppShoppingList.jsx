import React, { useState } from "react";
import { Link } from "react-router-dom";
import cm from "./appShopping.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import ShoppingList_list from "./shoppingList-component/ShoppingList_list";
import { nanoid } from "nanoid";

const AppShoppingList = () => {
    // state to list data on ShoppingList_list.jsx
    const [datas, setDatas] = useState([
        {
            id: 1,
            item: "carrots",
            quantity: 3,
            isCompleted: true,
        },

        // get local stored data
        //  const saved = localStorage.getItem("todoos");
        //  const savedDatas = JSON.parse(saved);
        //  return savedDatas || "";
    ]);

    // state to get data from Form (class=shoppingBoxTopForm)
    const [inputs, setInputs] = useState({
        id: "",
        item: "",
        quantity: "",
        isCompleted: "",
    });

    // function to add input (in the input tag)
    const handleAddTextInput = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newInputData = { ...inputs };
        newInputData[fieldName] = fieldValue;

        setInputs(newInputData);
    };

    // function for form (input) submission
    const handleFormSubmit = (ev) => {
        ev.preventDefault();

        const newInputs = {
            id: nanoid(),
            item: inputs.item,
            quantity: 1,
            isCompleted: false,
        };

        // copy the existing data, and add new input
        const newDatas = [...datas, newInputs];

        setDatas(newDatas);
        setInputs({
            id: "",
            item: "",
            quantity: "",
            isCompleted: "",
        });
    };

    // toggle for "isCompleted" boolean value
    const handleIsCompletedToggle = (clickedIndex) => {
        const newDatas = [...datas];
        newDatas[clickedIndex].isCompleted =
            !newDatas[clickedIndex].isCompleted;
        setDatas(newDatas);
    };

    return (
        <div className={cm.appShopping}>
            <div className={cm.appShoppingContainer}>
                <h1>AppShoppingList</h1>
                <div className={cm.shoppingBox}>
                    {/* top */}
                    <div className={cm.shoppingBoxTop}>
                        <form
                            className={cm.shoppingBoxTopForm}
                            onSubmit={handleFormSubmit}
                        >
                            <input
                                type="text"
                                className={cm.shoppingBoxTopInput}
                                name="item"
                                value={inputs.item}
                                onChange={handleAddTextInput}
                            />
                            <button
                                type="submit"
                                className={cm.shoppingBoxTopIcon}
                            >
                                <IoMdAdd />
                            </button>
                        </form>
                    </div>
                    {/* middle */}
                    {datas.map((data, index) => (
                        <ShoppingList_list
                            key={data.id}
                            data={data}
                            clickedIndex={index}
                            handleIsCompletedToggle={handleIsCompletedToggle}
                        />
                    ))}
                    {/* bottom */}
                    <div className={cm.shoppingBox__bottom}>
                        <div className={cm.shoppingBox__bottom}>
                            <p className={cm.shoppingBox__bottomText}>
                                Total: 6
                            </p>
                        </div>
                    </div>
                </div>
                <Link className="icon-gohome-link" to="/">
                    <div className="icon-gohome-container">
                        <HiOutlineHome className="icon-gohome-icon" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AppShoppingList;
