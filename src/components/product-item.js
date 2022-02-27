import React from "react";
import "./product-item.css";

export default function ProductItem(props) {
    return (
        <div className="card p-2 product-item">
            {props.image}
            <small>{props.title}</small>
        </div>
    );
}
