import React from "react";
import { Phone } from "react-bootstrap-icons";

export default function ContactCard(props) {
    return (
        <div className="card p-3 d-flex flex-column justify-content-center ">
            <div className=" mt-1 mb-1 d-flex flex-row align-items-center fs-5">
                {props.icon}
                &nbsp;
                <h5 className="text-dark m-0">{props.title}</h5>
            </div>
            {props.content}
        </div>
    );
}
