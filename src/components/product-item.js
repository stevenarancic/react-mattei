import React, { useState } from "react";
import { Phone } from "react-bootstrap-icons";
import "../styles/product-item.css";
import DynamicModal from "./dynamic-modal";
import { Button } from "react-bootstrap";

export default function ProductItem(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="child">
            <div className="card p-2 product-item">
                <div onClick={() => setModalShow(true)}>{props.image}</div>
                <div className="mt-1" />
                <small>{props.title}</small>
                <DynamicModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={props.title}
                    body={props.image}
                />
            </div>
        </div>
    );
}
