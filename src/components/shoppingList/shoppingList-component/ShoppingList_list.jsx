import React from "react";
import cm from "./ShoppingList_list.module.css";
import { FiChevronLeft, FiChevronRight, FiTrash2 } from "react-icons/fi";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const ShoppingList_list = ({
    data,
    clickedIndex,
    handleIsCompletedToggle,
    onHandleDelete,
    onHandleQuantityDecrease,
    onHandleQuantityIncrease,
}) => {
    return (
        <div className={cm.shoppingBox__mid}>
            <div className={cm.shoppingBox__mid_box}>
                <div
                    className={cm.shoppingBox__mid_box_left}
                    onClick={() => handleIsCompletedToggle(clickedIndex)}
                >
                    <div className={cm.shoppingBox__mid_box_left_icons}>
                        {!data.isCompleted && <FaRegCircle />}
                        {data.isCompleted && <FaRegCheckCircle />}
                    </div>
                    {data.isCompleted && (
                        <p className={cm.shoppingBox__mid_box_left_text_strike}>
                            {data.item}
                        </p>
                    )}
                    {!data.isCompleted && (
                        <p className={cm.shoppingBox__mid_box_left_text}>
                            {data.item}
                        </p>
                    )}
                </div>
                <div className={cm.shoppingBox__mid_box_right}>
                    <div className={cm.shoppingBox__mid_box_right_container}>
                        <FiChevronLeft
                            className={
                                cm.shoppingBox__mid_box_right_container_icon
                            }
                            onClick={() =>
                                onHandleQuantityDecrease(clickedIndex)
                            }
                        />

                        <p
                            className={
                                cm.shoppingBox__mid_box_right_container_text
                            }
                        >
                            {data.quantity}
                        </p>
                        <FiChevronRight
                            className={
                                cm.shoppingBox__mid_box_right_container_icon
                            }
                            onClick={() =>
                                onHandleQuantityIncrease(clickedIndex)
                            }
                        />
                    </div>
                </div>
                <div
                    className={cm.shoppingBox__mid_box_right_trash}
                    onClick={() => onHandleDelete(data.id)}
                >
                    <FiTrash2 />
                </div>
            </div>
        </div>
    );
};

export default ShoppingList_list;
