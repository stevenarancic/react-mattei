import React from "react";
import "../styles/product-item.css";

export default function ProductItem(props) {
    return (
        <div className="card p-2 product-item">
            {props.image}
            <div className="mt-1" />
            <small>{props.title}</small>
        </div>
    );
}
