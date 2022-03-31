import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cm from "./appShopping.module.css";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import ShoppingList_list from "./shoppingList-component/ShoppingList_list";
import { nanoid } from "nanoid";

// BUGS
// when items are added, and the isCompleted is toggled to true, the strike dont work. why?
// when new item is added, the total didnt take effect till the 2nd add on

const AppShoppingList = () => {
    // state to list data on ShoppingList_list.jsx
    const [datas, setDatas] = useState(() => {
        // get local stored data
        const saved = localStorage.getItem("todoos");
        const savedDatas = JSON.parse(saved);
        return savedDatas || "";
    });

    // state to keep the total item count
    const [totalItemCount, setTotalItemCount] = useState();

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
        setTotalItemCount(1);
        calculateTotal();
    };

    // handle quantity increase
    const handleQuantityIncrease = (index) => {
        const newDatas = [...datas];
        if (newDatas[index].quantity === 10) return;
        newDatas[index].quantity++;

        setDatas(newDatas);
        calculateTotal();
    };

    // handle quantity decrease
    const handleQuantityDecrease = (index) => {
        const newDatas = [...datas];

        if (newDatas[index].quantity === 0) return;

        newDatas[index].quantity--;

        setDatas(newDatas);
        calculateTotal();
    };

    // toggle for "isCompleted" boolean value
    const handleIsCompletedToggle = (clickedIndex) => {
        const newDatas = [...datas];
        newDatas[clickedIndex].isCompleted =
            !newDatas[clickedIndex].isCompleted;
        setDatas(newDatas);
    };

    const handleDelete = (clickedId) => {
        const newDatas = datas.filter((data) => data.id !== clickedId);
        setDatas(newDatas);
        calculateTotal();
    };

    // Count completed Item
    const countChecks = datas.filter((data) => data.isCompleted === true);

    // count total of item's quantity
    const calculateTotal = () => {
        const totalItemCount = datas.reduce((total, data) => {
            return total + data.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };

    // save to local storage
    useEffect(() => {
        const json = JSON.stringify(datas);
        localStorage.setItem("todoos", json);
    }, [datas]);

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
                            onHandleDelete={handleDelete}
                            onHandleQuantityIncrease={handleQuantityIncrease}
                            onHandleQuantityDecrease={handleQuantityDecrease}
                        />
                    ))}
                    {/* bottom */}
                    <div className={cm.shoppingBox__bottom}>
                        <div className={cm.shoppingBox__bottom}>
                            <p className={cm.shoppingBox__bottomText_completed}>
                                Completed: {countChecks.length}
                            </p>
                            <p className={cm.shoppingBox__bottomText_total}>
                                total: {totalItemCount}
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
